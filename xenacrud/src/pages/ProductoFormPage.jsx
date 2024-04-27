import {useForm, Controller} from 'react-hook-form';
import { useProductos } from '../context/ProductosContext';
import {useNavigate,useParams} from 'react-router-dom';
import { useEffect } from 'react';

function ProductoFormPage() {
  const {register,handleSubmit,setValue, control} = useForm();
  const {createProducto,getProducto,updateProducto} = useProductos()
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadProducto() {
      if (params.id){
        const producto = await getProducto(params.id);
        console.log(producto);
        setValue('nombre', producto.nombre);
        setValue('descripcion', producto.descripcion);
        setValue('precio', producto.precio);
        setValue('cantidad', producto.cantidad);
        setValue('imagen', producto.imagen);
      }
    }
    loadProducto();
  }, [params.id]) // Añadido params.id a las dependencias
  
  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append('nombre', data.nombre);
    formData.append('descripcion', data.descripcion);
    formData.append('precio', data.precio);
    formData.append('cantidad', data.cantidad);
  
    // Solo agrega la imagen si existe
    if (data.imagen) {
      formData.append('imagen', data.imagen);
    }
  
    console.log('formData', Array.from(formData)); // Agregado para depuración
  
    try {
      if (params.id){
        await updateProducto(params.id, formData);
      } else {
        await createProducto(formData);
      }
      navigate('/productos'); 
    } catch (error) {
      console.error('Error:', error);
    }
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center mt-3 ">
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>
          <h1 className='text-3xl font-bold my-2 text-center'>{params.id ? 'Editar Producto' : 'Agregar Producto'}</h1>
          <label htmlFor="nombre">Producto</label>
          <input type="text" placeholder="Agrega el producto"
          {...register('nombre')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
          />
          <label htmlFor="descripcion">Descripcion</label>
          <textarea  
          rows="3" 
          placeholder="descripcion"
          {...register("descripcion")}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          ></textarea>
          
          <label htmlFor="precio">Precio</label>
          <input type="number" placeholder="Precio"
          {...register('precio')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
          />

          <label htmlFor="cantidad">Cantidad</label>
          <input type="number" placeholder="Cantidad"
          {...register('cantidad')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
          />

          <label htmlFor="imagen">Imagen</label>
          <Controller
            name="imagen"
            control={control}
            defaultValue={undefined} // Aquí cambiamos null por undefined
            render={({ field }) => (
              <input 
                type="file" 
                {...field} 
                onChange={(e) => {
                  e.preventDefault();
                  field.onChange(e.target.files[0]); // Aquí accedes al archivo seleccionado
                }}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' 
              />
            )}
          />

          <div className='mt-2 flex justify-center'>
            <button className='text-white bg-red-600 hover:bg-red-500 px-3 py-1 rounded-md text-center'>
              {params.id ? 'Editar Producto' : 'Agregar Producto'}
            </button>
            <button type="button" onClick={() => navigate('/productos')} className='text-white hover:text-red-500 px-4 py-2 rounded-md text-center'>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductoFormPage;