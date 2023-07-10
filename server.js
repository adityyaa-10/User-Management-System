const express = require('express')
const dotenv = require('dotenv')
const app = express();
const morgan = require('morgan')
const bodyparser = require('body-parser')

const path = require('path')

const connectDB = require('./server/database/connection')

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

// log modules
// morgan module allows us to log a request on the console whenever a request is made.
app.use(morgan('tiny'))

//MongoDB connection

connectDB()

// Parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

//set view engine
app.set("view engine", "ejs") //If we are putting all are ejs files in views folder, then we need not to specify path
// app.set("views", path.resolve(__dirname, "views/ejs")) => If we are making another directory inside views folder

//load assets 
app.use('/css', express.static(path.resolve(__dirname, "assets/css/")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//Load routers 

app.use('/', require('./server/routes/router'))

app.listen(3000, () => {
    console.log((`Server is running on http://localhost:${PORT}`));
})