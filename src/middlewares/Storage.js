import multer from 'multer';
// Configura multer para almacenar archivos en el sistema de archivos
const guardar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename:  (req, file, cb) => {
        if(file!== null){
            const ext= file.originalname.split('.').pop();
            cb(null,Date.now()+'.'+ext)
        }
    }
});
const filtro = (req, file, cb) => {
    if(file&&(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'
    || file.mimetype === 'image/png')){
        cb(null, true)
    }else(
        cb(null, false)
    )
}
export const subirImagen = multer({storage: guardar, fileFilter:filtro})