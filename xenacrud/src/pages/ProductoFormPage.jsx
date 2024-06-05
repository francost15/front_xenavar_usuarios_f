import { useForm } from 'react-hook-form';
import { useProductos } from '../context/ProductosContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function ProductoFormPage() {
  const { register, handleSubmit, setValue} = useForm();
  const { createProducto, getProducto, updateProducto } = useProductos();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadProducto() {
      if (params.id) {
        try {
          const producto = await getProducto(params.id);
          if (producto.data) {
            setValue('nombre', producto.data.nombre);
            setValue('descripcion', producto.data.descripcion);
            setValue('precio', producto.data.precio);
            setValue('cantidad', producto.data.cantidad);
            setValue('tipo', producto.data.tipo);
            setValue('marca', producto.data.marca);
            setValue('imagen', producto.data.imagen);
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    loadProducto();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    for (let key in data) {
      if (key === 'imagen') {
        formData.append(key, data[key][0]);  // Asegúrate de agregar el archivo, no la ruta
      } else {
        formData.append(key, data[key]);
      }
    }

    console.log('FormData to be submitted:', formData);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      if (params.id) {
        await updateProducto(params.id, formData);
      } else {
        await createProducto(formData);
      }
      navigate("/productos");
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div className="bg-neutral-800 text-white min-h-screen flex items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-5 rounded-md">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <h1 className="text-3xl font-bold text-center mb-4">
            {params.id ? 'Editar Producto' : 'Agregar Producto'}
          </h1>
          <label htmlFor="nombre" className="block mb-2">Producto</label>
          <input 
            type="text" 
            placeholder="Agrega el producto"
            {...register('nombre', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
            autoFocus
          />

          <label htmlFor="descripcion" className="block mb-2">Descripcion</label>
          <textarea
            rows="3"
            placeholder="Agrega descripcion a tu producto"
            {...register("descripcion", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
          ></textarea>

          <label htmlFor="precio" className="block mb-2">Precio</label>
          <input 
            type="number" 
            placeholder="Ingresa el Precio"
            {...register('precio', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
          />

          <label htmlFor="cantidad" className="block mb-2">Cantidad</label>
          <input 
            type="number" 
            placeholder="Ingresa la cantidad"
            {...register('cantidad', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
          />

          <label htmlFor="tipo" className="block mb-2">Tipo</label>
          <input 
            type="text" 
            placeholder="Ingresa el tipo"
            {...register('tipo', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
          />

          <label htmlFor="marca" className="block mb-2">Marca</label>
          <input 
            type="text" 
            placeholder="Ingresa la marca"
            {...register('marca', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
          />

          <label htmlFor="imagen" className="block mb-2">Imagen</label>
          <input 
            type="file" 
            {...register('imagen', { required: !params.id })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
          />

          <div className="mt-4 flex justify-between">
            <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md text-white">
              {params.id ? 'Editar Producto' : 'Agregar Producto'}
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/productos')} 
              className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-md text-white"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductoFormPage;
