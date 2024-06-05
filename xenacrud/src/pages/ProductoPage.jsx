

import { useEffect, useState } from "react";
import { useProductos } from "../context/ProductosContext";
import ProductoCard from '../components/ProductoCard';

function ProductosPage() {
  const {getProductos} = useProductos();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      const response = await getProductos();
      setProductos(response.data);
    }
  
    fetchProductos();
  }, []);

  if (!productos || productos.length === 0) return (<h1>No hay productos</h1>)

  return (
    <div className="bg-neutral-800 text-white grid md:grid-cols-2 grid-cols-3 gap-2">
      {
        productos.map((producto) =>(
          <ProductoCard key={producto._id} producto={producto}/>
        ))
      }
    </div>
  );
}

export default ProductosPage;