import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {Link,useNavigate} from 'react-router-dom';
import { useEffect } from "react";
export const LoginPage = () => {
  // Utilizando el hook useForm de react-hook-form para manejar el estado y validación del formulario
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Utilizando el hook useAuth de nuestro contexto AuthContext para acceder a la funcionalidad de autenticación
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();

  // Utilizando el hook useNavigate de react-router-dom para navegar a diferentes rutas en la aplicación
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  //aqui el use effect va autentica y si es true navega a productos
  useEffect(() => {
    if (isAuthenticated) navigate("/productos");
  }, [isAuthenticated])
  
  return (
    <div className="bg-neutral-800 text-white flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-900 max-w-md w-full p-10 rounded-md ">
        {signinErrors.map((error, i) => (
          <div key={i} className="bg-red-500 p-2 text-white text-center my-2">
            {error}
          </div>
        ))}
        <h1 className="text-3xl font-bold  my-2 text-center">Login Xenavar</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { required: true })}
            className="rounded-md w-full bg-zinc-700 text-white px-4 py-2 my-2"
            placeholder="example@example.com"
          />
          {errors.email && (
            <p className="text-red-500">Email is required</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="rounded-md w-full bg-zinc-700 text-white px-4 py-2 my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        <div className="flex justify-center">
            <button type='submit' className='bg-red-700 text-white px-4 py-2 rounded-md my-2 hover:bg-red-500'>
                Login
            </button>
        </div>
        </form>
        <p className="flex gap-x-2 justify-between">
          No tienes una cuenta aun? <Link to="/register" className="text-red-500"> 
          Registrate</Link>
        </p>
      </div>
    </div>
  );
};
