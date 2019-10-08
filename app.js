import express from 'express'
import path from 'path'

//import midlewares
import morgan from 'morgan'
import cors from 'cors'
import history from 'connect-history-api-fallback'


//database
import'./db/connection'


//configuracion de puerto dinamico para hacer deploit
const SERVER_PORT = process.env.PORT | 3000
const app = express()

//midlewares
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/api', require('./routes/notas'));

// Middleware para Vue.js router modo history
app.use(history());

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(SERVER_PORT, () => {
    console.log(`App running: http://localhost:${SERVER_PORT}`)
})