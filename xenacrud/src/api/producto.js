import axios from './axios';

export const getProductosRequest = () => axios.get('/productos');
export const getProductoRequest = (id) => axios.get(`/productos/${id}`);
export const createProductoRequest = (producto) => axios.post('/productos',producto);
export const updateProductoRequest = (id,producto) => axios.put(`/productos/${id}`,producto);	
export const deleteProductoRequest = (id) => axios.delete(`/productos/${id}`);