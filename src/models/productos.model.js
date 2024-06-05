import mongoose, { version } from 'mongoose';
const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    marca:{
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true,
},{
    versionKey: false
}
);
export default mongoose.model("productos", productoSchema);