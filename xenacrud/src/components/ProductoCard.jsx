/* eslint-disable react/prop-types */
import { useProductos } from "../context/ProductosContext";
import {Link} from 'react-router-dom';
function ProductoCard({producto}) {
    console.log(producto);
    const {deleteProducto} = useProductos();
    return (
        <div className="bg-zinc-800 max-w-md w-full p-1 rounded-md mt-3">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{producto.nombre}</h1>
                <div className="flex gap-x-2 items-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={() => {
                        deleteProducto(producto._id);
                    }}>eliminar</button>
                    <Link to={`/productos/${producto._id}`} className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md" >editar</Link>
                </div>
            </header>
            <p className="text-slate-300">{producto.descripcion}</p>
                <p>
                    {producto.precio}
                </p>
                <p>{producto.cantidad} </p>
                <p>{producto.imagen ? producto.imagen : 'Imagen no disponible'}</p>
        </div>
    );
}

export default ProductoCard