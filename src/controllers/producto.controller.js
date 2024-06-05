import productosModel from '../models/productos.model.js';
import Producto from '../models/productos.model.js';
import * as fs from 'fs';

export const getProductos = async (req,res) => {
  try{
      const {id} = req.params
      const rows =
      (id === undefined) ? await productosModel.find() : await productosModel.findById(id)
      return res.status(200).json({status:true, data:rows})
  }
  catch (error){
      return res.status(500).json({status:false, errors:[error]});
  }
};
const validar = (nombre,descripcion,precio,cantidad,imagen,tipo,marca,sevalida) => {
  var errors = [];
  if (nombre === undefined || nombre.trim()==='') {
    errors.push('El nombre no debe estar vacio');
  }
  if (descripcion === undefined || descripcion.trim()==='') {
    errors.push('La descripcion no debe estar vacia');
  }
  if (precio === undefined || precio.trim() === '' || isNaN(precio)) {
    errors.push('El precio no debe estar vacio o no es un número');
}
if (cantidad === undefined || cantidad.trim() === '' || isNaN(cantidad)) {
    errors.push('La cantidad no debe estar vacia o no es un número');
}
if (tipo === undefined || (typeof tipo === 'string' && tipo.trim()==='')) {
  errors.push('El tipo no debe estar vacio');
}
if (marca === undefined || (typeof marca === 'string' && marca.trim()==='')) {
  errors.push('La marca no debe estar vacia');
}
  if (sevalida === 'Y' && imagen=== undefined) {
    errors.push('La imagen debe ser jpg o png');
  }else{
    if(errors!= '')
      {
        fs.unlinkSync('./public/uploads/'+imagen.filename)
      }
  }
  return errors;
};
export const createProducto= async (req,res) => {
  console.log('createProducto called with:', req.body, req.file);
  try{
    const {nombre, descripcion, precio, cantidad, tipo, marca} = req.body;
    const validacion = validar(nombre,descripcion,precio,cantidad,tipo,marca,req.file,'Y')
    if(validacion== ''){
      const newProducto = new productosModel({
        nombre:nombre,
        descripcion:descripcion,
        precio:precio,
        cantidad:cantidad,
        tipo:tipo,
        marca:marca,
        imagen: '/uploads/'+req.file.filename,
        user: req.user.id,
    })
      return await newProducto.save().then(
        () => {res.status(200).json({status:true, message:'Producto creado'})}
      )
    }
    else{
      return res.status(400).json({status:false,errors:validacion});
    }
  } catch (error){
    return res.status(500).json({status:false, errors: [error.message]});
  }
};

export const deleteProducto = async (req, res) => {
  try {
      const producto = await Producto.findByIdAndDelete(req.params.id);
      if (!producto) return res.status(404).json({status:false,message: "Producto no encontrado"});
      return res.status(200).json({status:true, message: "Producto eliminado correctamente"});
  } catch (error) {
      return res.status(500).json({status:false,message: "Error al eliminar el producto"});
  }
};

export const updateProducto= async (req,res) => {
  try{
    const {id} = req.params;
    const{nombre,descripcion,precio,cantidad,tipo,marca} = req.body
    let imagen = '';
    let valores = {nombre:nombre,descripcion:descripcion,precio:precio,cantidad:cantidad,tipo:tipo,marca:marca};
    if (req.file != null){
      imagen = '/uploads/' + req.file.filename
      valores = {nombre:nombre,descripcion:descripcion,precio:precio,cantidad:cantidad,imagen:imagen,tipo:tipo,marca:marca};
    }
    const validacion = validar(nombre,descripcion,precio,cantidad,tipo,req.file,'Y')
    if(validacion== ''){
      await productosModel.updateOne({_id:id},{ $set: valores})
      return res.status(200).json({status:true, message:'Producto actualizado'})
    }
    else{
      return res.status(400).json({status:false,errors:validacion});
    }
  } catch (error){
    return res.status(500).json({status:false, errors: [error.message]});
  }
};
export const getProductosPorTipo = async (req,res) => {
  try{
      const {tipo} = req.params
      const rows = await productosModel.find({tipo:tipo})
      return res.status(200).json({status:true, data:rows})
  }
  catch (error){
      return res.status(500).json({status:false, errors:[error]});
  }
}