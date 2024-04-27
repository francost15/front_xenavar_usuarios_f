import Producto from '../models/productos.model.js';
import multer from 'multer';

// Configura multer para almacenar archivos en el sistema de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

export const getProductos= async (req,res) => {
try{
    const producto = await Producto.find({
        user: req.user.id
    }).populate('user');
    res.json(producto);
}catch(error){
    return res.status(500).json({message:"Productos not found"});
}
};

export const createProducto= async (req,res) => {
  upload.single('imagen')(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }

    const{nombre,descripcion,precio,cantidad} = req.body
    const newProducto = new Producto({
        nombre,
        descripcion,
        precio,
        cantidad,
        imagen: req.file ? req.file.path : null, // Si no hay archivo, establece imagen en null
        user: req.user.id,
    })
    const savedProducto = await newProducto.save();
    res.json(savedProducto);
  })
};

export const getProducto = async (req,res) => {
    try{
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).json({message: "Producto not found"});
        res.json(producto);
    }catch (error) {
        return res.status(404).json({message:"Producto not found"});
    }
};

export const deleteProducto = async (req,res) => {
    try{
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) return res.status(404).json({message: "Producto not found"});
        return res.sendStatus(204);
    }catch (error) {
        return res.status(404).json({message:"Producto not found"});
    }
};

export const updateProducto = (req, res) => {
  upload.single('imagen')(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }

    try {
      const producto = await Producto.findById(req.params.id);
      if (!producto) return res.status(404).json({message: "Producto not found"});

      const {nombre, descripcion, precio, cantidad} = req.body;
      producto.nombre = nombre;
      producto.descripcion = descripcion;
      producto.precio = precio;
      producto.cantidad = cantidad;
      producto.imagen = req.file ? req.file.path : producto.imagen; // Si hay un nuevo archivo, actualiza la imagen

      const updatedProducto = await producto.save();
      res.json(updatedProducto);
    } catch (error) {
      return res.status(500).json({message: "Error updating producto"});
    }
  })
};