import { useState, useEffect } from "react";
import ProductoCardC from "../components/ProductoCardCliente";
import FooterComponent from "../components/FooterComponent";
import { NavBarCategories } from "../components/NavBarCategories";
import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import { useMediaQuery } from "react-responsive"; // Importación añadida

const FilterSidebar = ({ filters, onChange }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const filterOptions = (
    <div className="filters-container p-4 space-y-4 bg-white shadow-lg rounded">
      <select name="type" onChange={handleFilterChange} value={filters.type} className="w-full p-2 border rounded">
        <option value="">Todos los tipos</option>
        <option value="tipo1">Tipo 1</option>
        <option value="tipo2">Tipo 2</option>
      </select>
      <select name="price" onChange={handleFilterChange} value={filters.price} className="w-full p-2 border rounded">
        <option value="">Todos los precios</option>
        <option value="low">Menos de 1000</option>
        <option value="medium">1000 - 1500</option>
        <option value="high">Más de 1500</option>
      </select>
      <select name="marca" onChange={handleFilterChange} value={filters.marca} className="w-full p-2 border rounded">
        <option value="">Todas las marcas</option>
        <option value="marca1">Marca 1</option>
        <option value="marca2">Marca 2</option>
      </select>
    </div>
  );

  return (
    <div className="lg:w-1/4 w-full p-4 lg:p-0">
      {isMobile ? (
        <div>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full p-2 bg-gray-700 text-white rounded">
            {isDropdownOpen ? "Cerrar Filtros" : "Abrir Filtros"}
          </button>
          {isDropdownOpen && (
            <div className="w-full bg-white shadow-lg rounded mt-2">
              {filterOptions}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full">
          {filterOptions}
        </div>
      )}
    </div>
  );
};

export function Productoscards() {
  const { marca, categoria } = useParams();
  const location = useLocation();
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [filters, setFilters] = useState({
    type: categoria || "",
    price: "",
    marca: marca || "",
    search: new URLSearchParams(location.search).get('search') || ""
  });

  useEffect(() => {
    async function fetchProductos() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACK_URL}`);
        if (response.data.status) {
          const allProductos = response.data.data;
          setProductos(allProductos);
          setFilteredProductos(filterProducts(allProductos, filters));
        } else {
          console.error('No products found');
        }
      } catch (error) {
        console.error('fetchProductos error:', error);
      }
    }

    fetchProductos();
  }, [marca, categoria, location.search]);

  useEffect(() => {
    setFilteredProductos(filterProducts(productos, filters));
  }, [filters, productos]);

  const filterProducts = (productos, filters) => {
    return productos.filter(producto => {
      const tipoMatch = filters.type ? producto.tipo.toLowerCase() === filters.type.toLowerCase() : true;
      const marcaMatch = filters.marca ? producto.marca.toLowerCase() === filters.marca.toLowerCase() : true;
      const searchMatch = filters.search ? producto.nombre.toLowerCase().includes(filters.search.toLowerCase()) : true;
      let priceMatch = true;
      if (filters.price) {
        const price = parseFloat(producto.precio);
        if (filters.price === "low") priceMatch = price < 1000;
        else if (filters.price === "medium") priceMatch = price >= 1000 && price < 1500;
        else if (filters.price === "high") priceMatch = price >= 1500;
      }
      return tipoMatch && marcaMatch && searchMatch && priceMatch;
    });
  };

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  if (!productos || productos.length === 0) return (
    <div className="mt-8 w-full gap-x-2 flex justify-center items-center">
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-purple-500"></div>
        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-red-500 ml-3"></div>
        <div className="animate-spin ease-linear rounded-full w-10 h-10 border-t-2 border-b-2 border-blue-500 ml-3"></div>
      </div>
    </div>
  );

  return (
    <>
      <NavBarCategories />
      <div className="flex flex-col lg:flex-row">
        <FilterSidebar filters={filters} onChange={handleFilterChange} />
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
