const express = require('express')
require('./db/mongoose')
const eventrouter = require('./routers/event')

const port = process.env.PORT 
const app = express()


app.use(eventrouter)
app.use(express.json())


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
