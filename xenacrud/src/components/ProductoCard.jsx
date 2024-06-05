/* eslint-disable react/prop-types */
import { useProductos } from "../context/ProductosContext";
import {Link} from 'react-router-dom';
function ProductoCard({producto}) {
    const {deleteProducto} = useProductos();
    const base = 'http://localhost:4000'
    return (
        <div className="flex flex-col bg-black rounded-3xl mt-4">
            <div className=" px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div className="text-center">
                        <h2 className=" text-center text-2xl font-medium tracking-tighter text-white lg:text-3xl">
                        {producto.nombre}
                        </h2>
                        <p className="mt-2 text-xl text-gray-100">{producto.descripcion} </p>
                    </div>
                    <div className="text-center mt-2">
                        <p>
                        <span className="text-5xl font-light text-white">${producto.precio}</span>
                        </p>
                    <p>Cantidad: {producto.cantidad} </p>
                    <p>Tipo: {producto.tipo} </p>
                    </div>
                    <div className="mt-2 flex justify-center">
                    <img src={base+producto.imagen} alt={producto.nombre} width={450} height={400}/>     
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-6 pb-8 sm:px-8 sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0"> {/* Agregado espacio entre botones */}
            <button className="items-center justify-center w-full sm:w-1/2 px-6 py-2.5 text-center text-white duration-200 bg-red-600 border-2 border-red-700 rounded-full nline-flex hover:bg-transparent hover:border-red-400 hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white" onClick={async () => {
                await deleteProducto(producto._id);
                window.location.reload();
                }}>Eliminar Producto
            </button>
                <Link to={`/productos/${producto._id}`} aria-describedby="tier-starter" className="items-center justify-center w-full sm:w-1/2 px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white">
                Editar Producto
                </Link>
            </div>
        </div>
    );
}


export default ProductoCard