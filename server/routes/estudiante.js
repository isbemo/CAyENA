import express from 'express'

const router = express.Router()

// importar el modelo estudiante 
import estudiante from '../models/estudiantes'

// Agregar un estudiante
router.post('/estudiante', async(req, res) => { 

    const body = req.body

    try { 

        const estudianteDB = await estudiante.create(body)
        res.status(200).json(estudianteDB)

    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

// Exportamos la configuración de express app 
module.exports = router;