import { useEffect } from "react";
import { useProductos } from "../context/ProductosContext";
import ProductoCard from '../components/ProductoCard';

function ProductosPage() {
  const {getProductos, producto} = useProductos();

  useEffect(() => {
    getProductos();
  }, []);

  console.log(producto); // Agregado para imprimir los productos en la consola

  if (!producto || producto.length === 0) return (<h1>No hay productos</h1>)

  return (
    <div className="grid md:grid-cols-2 grid-cols-3 gap-2">
      {
        producto.map((producto) =>(
          <ProductoCard key={producto._id} producto={producto}/>
        ))
      }
    </div>
  );
}

export default ProductosPage;