import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {validateSchema} from '../middlewares/validator.middleware.js';
import { createProducto, deleteProducto, getProducto, getProductos, updateProducto } from '../controllers/producto.controller.js';
import { createProductoSchema } from '../schemas/producto.schema.js';

const router = Router()

router.get('/productos',authRequired,getProductos);
router.get('/productos/:id',authRequired,getProducto);
router.post('/productos',authRequired,
validateSchema(createProductoSchema),createProducto);
router.delete('/productos/:id',authRequired,deleteProducto);
router.put('/productos/:id',authRequired,updateProducto);

export default router;