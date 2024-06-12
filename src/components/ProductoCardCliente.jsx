/* eslint-disable react/prop-types */
export function ProductoCardC({producto}) {
    // Asegúrate de que la variable base termina con '/' si no está presente
    return (
        <div className="flex justify-center bg-white rounded-xl shadow-xl w-full m-4 sm:w-1/2 md:w-48 md:h-96">
            <div className="px-2 py-4 sm:p-6 sm:pb-4">
                <div className="text-center">
                    <h2 className="text-center text-xl sm:text-2xl font-medium tracking-tighter text-black lg:text-xl">
                        {producto.nombre}
                    </h2>
                    {/* <p className="mt-2 text-sm sm:text-base lg:text-xl text-gray-900">{producto.descripcion} </p> */}
                </div>
                <div className="text-center">
                    <p>
                        <span className="text-3xl sm:text-4xl font-light text-gray-900">${producto.precio}</span>
                    </p>
                </div>
                <div className="flex justify-center mt-2 ml-4">
                    <img 
                        src={`${import.meta.env.VITE_BACK_IMAGE}${producto.imagen}`} 
                        alt={producto.nombre} 
                        width={100} 
                        height={100} 
                        className="object-cover"
                    />   
                </div>
                <a href='https://api.whatsapp.com/send?phone=522224568189&text=Hola,%20me%20puede%20cotizar%20esto%20' target="_blank" rel="noopener noreferrer">
                    <button className="border border-black text-black hover:border-white hover:text-white hover:bg-red-600 mr-8 mt-2 rounded-md w-full h-9">
                        Pedir Cotizacion
                    </button>
                </a>
            </div>
        </div>
    );
}

export default ProductoCardC;