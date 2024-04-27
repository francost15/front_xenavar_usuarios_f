/* eslint-disable no-unused-vars */
import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
export const RegisterPage = () => {
  const {register,handleSubmit, formState: {
    errors
  },} =  useForm();
  const {signup, isAuthenticated,errors: registerErrors} = useAuth();
  const navigate = useNavigate()
  
  useEffect(() => {
    if (isAuthenticated)  navigate("/tasks")
  }, [isAuthenticated])
  
  const onSubmit = handleSubmit(async(values) => {
    signup(values);
  })
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
    <div className='bg-zinc-900 max-w-md p-10 rounded-md mt-6'>
        {
          registerErrors.map((error, i) => (
            <div key={i} className="bg-red-500 p-2 text-white">
              {error}
            </div>
          ))
        }
      <h1 className='text-3xl font-bold my-2 text-center'>Register Xenavar</h1>
      <form onSubmit={onSubmit}>
        <input type="text" {...register("username", {required: true})} 
        className='rounded-md w-full bg-zinc-700 text-white px-4 py-2  my-2'
        placeholder='Nombre Completo'
        />
        {
          errors.username && (
            <p className='text-red-500'>Username is required</p>
          )}
        <input type="email" {...register("email",{required: true})} 
        className='rounded-md w-full bg-zinc-700 text-white px-4 py-2  my-2'
        placeholder="example@example.com"
        />
                {
          errors.email && (
            <p className='text-red-500'>Email is required</p>
          )}
        <input type="password" {...register("password", {required:true})}
        className='rounded-md w-full bg-zinc-700 text-white px-4 py-2  my-2'
        placeholder='Contraseña'
        />
        {
          errors.password && (
            <p className='text-red-500'>Password is required</p>
        )}
        <div className="flex justify-center">
            <button type='submit' className='bg-red-700 text-white px-4 py-2 rounded-md my-2 hover:bg-red-500'>
                Register
            </button>
        </div>
      </form>
      <p className="flex gap-x-2 justify-between">
          Ya tienes una cuenta? <Link to="/login" className="text-red-500"> 
          Inicia en Login</Link>
        </p>
    </div>
    </div>
  )
}
