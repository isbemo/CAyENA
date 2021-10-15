console.log('Hello')

const express = require('express')
//  const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path');
const app = express()


//BD Connection
const mongoose = require('mongoose')

//const uri = 'mongodb://localhost:27017/cayenaPruebas'
const options = {useNewUrlParser: true, useUnifiedTopology: true} 

// const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Samuel:B2TOBXEDAEZRGTIR@cluster0.crlhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
/* const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
mongoose.connect(uri, options).then( 
    () => { 

        console.log(`Conectado a DB: ${uri}`) }, 

    err => { 

        console.log(err) })

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'))
//  app.use(bodyParser.json())
app.use(cors())

/*app.get('/status', (req,res) =>{
    res.send({
        message: 'Hello World!'
    })
})*/

/*app.post('/register', (req,res) =>{

    const body = req.body
    res.send({
            message: `Hello ${body.email}! Your user was registered. Have fun!`
    })
})*/

app.use('/register', require('../routes/estudiante'))
app.use('/search', require('../routes/clave'))
app.use('/update', require('../routes/update'))
app.use('/delete', require('../routes/delete'))

const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 8081)
