/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  createProductoRequest,
  deleteProductoRequest,
  getProductoRequest,
  updateProductoRequest,
  getProductosRequest,
  getProductosPorTipoRequest
} from '../api/producto';

const ProductContext = createContext();

export const useProductos = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductos must be used within a ProductProvider");
  }
  return context;
}

export function ProductProvider({ children }) {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const res = await getProductosRequest();
      console.log('getProductosRequest response:', res);
      setProductos(res.data);
      return res.data;
    } catch (error) {
      console.error('getProductosRequest error:', error);
    }
  };

  const deleteProducto = async (id) => {
    try {
      const res = await deleteProductoRequest(id);
      console.log('deleteProductoRequest response:', res);
      if (res.status === 204) {
        setProductos(productos.filter((producto) => producto._id !== id));
      }
    } catch (error) {
      console.error('deleteProductoRequest error:', error);
    }
  };

  const getProducto = async (id) => {
    try {
      const res = await getProductoRequest(id);
      console.log('getProductoRequest response:', res);
      return res.data;
    } catch (error) {
      console.error('getProductoRequest error:', error);
    }
  };

  const createProducto = async (producto) => {
    console.log('createProducto called with:', producto);
    try {
      const res = await createProductoRequest(producto);
      console.log('createProductoRequest response:', res);
      if (res.status === 200) {
        console.log('Producto created successfully, updating state.');
        setProductos([...productos, res.data]);
      } else {
        console.log('Unexpected status code:', res.status);
      }
    } catch (error) {
      console.error('createProductoRequest error:', error);
    }
  };

  const updateProducto = async (id, producto) => {
    try {
      const res = await updateProductoRequest(id, producto);
      console.log('updateProductoRequest response:', res);
      // Opcionalmente, actualizar el estado local si es necesario
      const updatedProductos = productos.map((item) =>
        item._id === id ? res.data : item
      );
      setProductos(updatedProductos);
    } catch (error) {
      console.error('updateProductoRequest error:', error);
    }
  };

  const ProductosPorTipo = async (tipo) => {
    try {
      const res = await getProductosPorTipoRequest(tipo);
      console.log('getProductosPorTipoRequest response:', res);
      return res.data;
    } catch (error) {
      console.error('getProductosPorTipoRequest error:', error);
    }
  };

  return (
    <ProductContext.Provider value={{
      productos,
      createProducto,
      deleteProducto,
      getProductos,
      getProducto,
      updateProducto,
      ProductosPorTipo
    }}>
      {children}
    </ProductContext.Provider>
  );
}
