const express = require('express')
const dotenv = require('dotenv')
const app = express();
const morgan = require('morgan')

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

// log modules
// morgan module allows us to log a request on the console whenever a request is made.
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send("User Management System")
})

app.listen(3000, () => {
    console.log((`Server is running on http://localhost:${PORT}`));
})