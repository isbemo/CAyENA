import mongoose from 'mongoose'
const Schema = mongoose.Schema

const estudiantesSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    nombre2: String,
    apellidos: String,
    apellido2: String,
    clave: String, 
    //  usuarioId: String
    //  descripcion: String, usuarioId: String, 
    //  date:{type: Date, default: Date.now}, 
    //  activo: {type: Boolean, default: true} 
});

// Convertir a modelo

var alumnos = mongoose.model('estudiantes', estudiantesSchema,'estudiantes')
export default alumnos