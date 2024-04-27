import {z} from 'zod';

export const createProductoSchema = z.object({
    nombre: z.string({
        required_error: "nombre is required",
    }),
    descripcion: z.string({
        required_error: "descripcion is required",
    }),
    precio: z.number({
        required_error: "precio is required",
    }),
    cantidad: z.number({
        required_error: "cantidad is required",
    }),

});