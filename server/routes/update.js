import express from 'express'

const router = express.Router()

// importar el modelo estudiante 
import estudiante from '../models/estudiantes'

// Actualizar clave de un estudiante
router.put('/user', async(req, res) => { 

    // const id = req.body.nombre
    //const usuario = req.params.nombre
    console.log(`Información: ${req.body}`)
    const usuario = req.body.nombre
    const nombre2 = req.body.nombre2
    const apellidos = req.body.apellidos
    const apellido2 = req.body.apellido2
    const contra = req.body.clave
    try {
        const user = await estudiante.findOne({nombre: usuario})
        console.log(`Backend: ${user}`)
        if (user){ 
            await estudiante.findOneAndUpdate({nombre: usuario},{"$set":{nombre2: nombre2, apellidos: apellidos, apellido2: apellido2, clave: contra}})
            res.status(200).json('Información actualizada')
        } 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

// Exportamos la configuración de express app 
module.exports = router;