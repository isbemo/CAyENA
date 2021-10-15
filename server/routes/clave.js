import express from 'express'

const router = express.Router()

// importar el modelo estudiante 
import estudiante from '../models/estudiantes'

// Agregar un estudiante
router.get('/clave/:nombre', async(req, res) => { 

    // const id = req.body.nombre
    // const usuario = req.body
    //const usuario = req.params.nombre
    const usuario = req.params.nombre
    // console.log(usuario)
    try { 
        const claveDB = await estudiante.findOne({nombre: usuario})
        //const claveDB = await estudiante.findById({"_id": id})
        //res.status(200).json(req.body.nombre)
        console.log(claveDB)
        if (claveDB){
            res.status(200).json(claveDB)
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

router.get('/claveAll', async(req, res) => { 

    try { 

        const todoDB = await estudiante.find()
        res.status(200).json(todoDB)
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});
/*
router.put('/user', async(req, res) => { 

    // const id = req.body.nombre
    //const usuario = req.params.nombre
    const usuario = req.body.nombre
    const contra = req.body.clave
    console.log(nombre, clave)
    try { 
        const claveDB = await estudiante.findOneAndUpdate({nombre: usuario}, {clave: contra})
        //const claveDB = await estudiante.findById({"_id": id})
        //res.status(200).json(req.body.nombre)
        console.log(claveDB)
        if (claveDB){
            await estudiante.deleteOne({nombre: usuario})
            res.status(200).json('Clave actualizada')
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
*/


// Exportamos la configuración de express app 
module.exports = router;