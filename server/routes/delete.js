import express from 'express'

const router = express.Router()

// importar el modelo estudiante 
import estudiante from '../models/estudiantes'

// Agregar un estudiante
router.get('/user/:nombre', async(req, res) => { 

    // const id = req.body.nombre
    // const usuario = req.body
    //const usuario = req.params.nombre
    const usuario = req.params.nombre
    console.log(usuario)
    try { 
        const claveDB = await estudiante.findOne({nombre: usuario})
        //const claveDB = await estudiante.findById({"_id": id})
        //res.status(200).json(req.body.nombre)
        console.log(claveDB)
        if (claveDB){
            await estudiante.deleteOne({nombre: usuario})
            res.status(200).json('Usuario Eliminado')
        }else{
            res.status(200).json('No Existe')
        }
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

router.delete('/deleteAll', async(req, res) => { 

    try { 

        await estudiante.deleteMany()
        res.status(200).json("Base de datos Eliminada")
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

// Exportamos la configuración de express app 
module.exports = router;