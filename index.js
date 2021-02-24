//npm init
//npm express
//npm nodemon
// npm init
// npm install cors helmet jest morgan dotenv
// npm init

const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const helmet = require('helmet')
const randomRoutes = require('./routes/randomRoutes')
const app = express()
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(helmet())

dotenv.config()

app.use('/api', randomRoutes )

const run = async () =>{
    await app.listen(process.env.PORT || 3000)
    console.log('Servidor arrancado')
}

run().catch( error => console.error('Fallo al iniciar el servidor')) 