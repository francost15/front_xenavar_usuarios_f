import { useEffect, useState } from "react";
import { useProductos } from "../../context/ProductosContext";
import ProductoCardC from "../../components/ProductoCardCliente";
import FooterComponent from "../../components/FooterComponent";
import { NavBarCategories } from "../../components/NavBarCategories";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";

function Productoscards() {
  const { getProductos } = useProductos();
  const { marca, categoria } = useParams(); // Obtiene la marca y la categoría de la URL
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [filters, setFilters] = useState({
    type: categoria || "", // Filtra basado en la categoría de la URL
    price: "",
    marca: marca || ""
  });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Determina la categoría en base a la URL
    const path = location.pathname;
    let categoria = "";
    if (path.includes("proteinas")) categoria = "Proteinas";
    else if (path.includes("creatinas")) categoria = "Creatinas";
    else if (path.includes("vitaminas")) categoria = "Vitaminas";
    
    // Actualiza los filtros con la categoría
    setFilters(prevFilters => ({
      ...prevFilters,
      type: categoria
    }));
  }, [location]);

  useEffect(() => {
    async function fetchProductos() {
      const response = await getProductos();
      const allProductos = response.data;
      setProductos(allProductos);
      // Filtra los productos inicialmente según los filtros
      setFilteredProductos(filterProducts(allProductos, filters));
    }

    fetchProductos();
  }, []);

  useEffect(() => {
    // Actualiza los productos filtrados cuando los filtros cambian
    setFilteredProductos(filterProducts(productos, filters));
  }, [filters, productos]);

  const filterProducts = (productos, filters) => {
    let tempProducts = [...productos];

    if (filters.type) {
      tempProducts = tempProducts.filter(producto =>
        producto.tipo.toLowerCase() === filters.type.toLowerCase()
      );
    }

    if (filters.price) {
      tempProducts = tempProducts.filter(producto => {
        const price = parseFloat(producto.precio);
        if (filters.price === "low") return price < 1000;
        if (filters.price === "medium") return price >= 1000 && price < 1500;
        if (filters.price === "high") return price >= 1500;
      });
    }

    if (filters.marca) {
      tempProducts = tempProducts.filter(producto =>
        producto.marca.toLowerCase() === filters.marca.toLowerCase()
      );
    }

    return tempProducts;
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  if (!productos || productos.length === 0) return (<h1>No hay productos</h1>);

  return (
    <>
      <NavBarCategories />
      <div className="flex flex-col lg:flex-row">
        {isMobile ? (
          <div className="w-full p-4 bg-gray-100 shadow-xl rounded-lg">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-white bg-black px-4 py-2 rounded-md transition duration-200 hover:bg-gray-700 w-full">
              Filtrar Productos
            </button>
            {isDropdownOpen && (
              <div className="mt-4">
                <h2 className="font-bold text-xl mb-4">Filtrar Productos</h2>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-gray-700">Tipo</h3>
                  <select
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="form-select w-full bg-white border border-gray-300 hover:border-red-600 text-gray-700 px-4 py-2 rounded-md"
                  >
                    <option value="">Todos</option>
                    <option value="Proteinas">Proteínas</option>
                    <option value="Creatinas">Creatinas</option>
                    <option value="Vitaminas">Vitaminas</option>
                    <option value="Preworkout">Pre-workouts</option>
                  </select>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-gray-700">Precio</h3>
                  <select
                    name="price"
                    value={filters.price}
                    onChange={handleFilterChange}
                    className="form-select w-full bg-white border border-gray-300 hover:border-red-600 text-gray-700 px-4 py-2 rounded-md"
                  >
                    <option value="">Todos</option>
                    <option value="low">Menos de $1000</option>
                    <option value="medium">$1000 - $1500</option>
                    <option value="high">Más de $1500</option>
                  </select>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-gray-700">Marcas</h3>
                  <select
                    name="marca"
                    value={filters.marca}
                    onChange={handleFilterChange}
                    className="form-select w-full bg-white border border-gray-300 hover:border-red-600 text-gray-700 px-4 py-2 rounded-md"
                  >
                    <option value="">Todos</option>
                    <option value="Mutant">Mutant</option>
                    <option value="Raw">Raw</option>
                    <option value="Birdman">Birdman</option>
                    <option value="Insane">Insane Labz</option>
                    <option value="Dragon">Dragon Pharma</option>
                    <option value="Gat">Gat</option>
                    <option value="Muscletech">Muscletech</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full lg:w-56 p-5 bg-gray-100 h-auto lg:h-auto shadow-xl rounded-lg">
            <h2 className="font-bold text-xl mb-4">Filtrar Productos</h2>

            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Tipo</h3>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="form-select w-full bg-white border border-gray-300 hover:border-red-600 text-gray-700 px-4 py-2 rounded-md"
              >
                <option value="">Todos</option>
                <option value="Proteinas">Proteínas</option>
                <option value="Creatinas">Creatinas</option>
                <option value="Vitaminas">Vitaminas</option>
                <option value="Preworkout">Pre-workouts</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Precio</h3>
              <select
                name="price"
                value={filters.price}
                onChange={handleFilterChange}
                className="form-select w-full bg-white border border-gray-300 hover:border-red-600 text-gray-700 px-4 py-2 rounded-md"
              >
                <option value="">Todos</option>
                <option value="low">Menos de $1000</option>
                <option value="medium">$1000 - $1500</option>
                <option value="high">Más de $1500</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Marcas</h3>
              <select
                name="marca"
                value={filters.marca}
                onChange={handleFilterChange}
                className="form-select w-full bg-white border border-gray-300 hover:border-red-600 text-gray-700 px-4 py-2 rounded-md"
              >
                <option value="">Todos</option>
                <option value="Mutant">Mutant</option>
                <option value="Raw">Raw</option>
                <option value="Birdman">Birdman</option>
                <option value="Insane">Insane Labz</option>
                <option value="Dragon">Dragon Pharma</option>
                <option value="Gat">Gat</option>
                <option value="Muscletech">Muscletech</option>
              </select>
            </div>
          </div>
        )}

        <div className="w-full lg:flex-grow p-5 flex flex-wrap justify-center items-start">
        {filteredProductos.map((producto, index) => (
  <ProductoCardC key={index} producto={producto} />
))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default Productoscards;