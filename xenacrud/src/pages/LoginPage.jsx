import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {Link,useNavigate} from 'react-router-dom';
import { useEffect } from "react";

export const LoginPage = () => {
  const { register,
      handleSubmit, 
      formState: { errors } 
    } = useForm();
  const { signin, errors: signinErrors,isAuthenticated } = useAuth();
    const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated])
  
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
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
          <button className='bg-red-600 text-white px-4 py-2 rounded-md my-2' type="submit">
            Login
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          No tienes una cuenta aun? <Link to="/register" className="text-red-500"> 
          Registrate</Link>
        </p>
      </div>
    </div>
  );
};
