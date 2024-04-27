/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {createProductoRequest,deleteProductoRequest,getProductoRequest,updateProductoRequest,getProductosRequest} from '../api/producto';

const ProductContext = createContext();

export const useProductos = () => {
    const context = useContext(ProductContext);
    if(!context) {
        throw new Error("use Productos must be used within a ProductProvider");
    }
    return context;
}

export function ProductProvider({ children }) {
    const [producto, setProducto] = useState([]);
  

    const getProductos = async() => {
        try{
            const res= await getProductosRequest();
            setProducto(res.data)
        }catch(error){
            console.error(error);
        }
    };

    const deleteProducto = async (id) => {
        try{
            const res= await deleteProductoRequest(id);
            if (res.status === 204) setProducto(producto.filter((producto) => producto._id !== id));
        }
        catch(error){
            console.log(error);
        }
    };

    const getProducto = async (id) => {
        try{
            const res= await getProductoRequest(id);
            return res.data;
        }catch(error){
            console.error(error);
        }
    };

    const createProducto = async (producto) => {
        try {
            const res = await createProductoRequest(producto);
            if (res.status === 201) setProducto([...producto, res.data]);
        } catch (error) {
            console.error('Error creando producto:', error);
        }
    };

    const updateProducto = async (id,product) => {
        try{
            const res= await updateProductoRequest(id,product);
            console.log(res);
        }catch(error){
            console.error(error);
        }
    }

    return (
        <ProductContext.Provider value={{
            producto,
            createProducto,
            deleteProducto,
            getProductos,
            getProducto,
            updateProducto,
        }} >
            {children}
        </ProductContext.Provider>
    )
}