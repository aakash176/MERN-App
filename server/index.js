const express = require('express')
const {connect} = require('./database/connect')
const app = express()
const cors = require('cors')
const routes = require('./routes/routes')
const bodyparser = require('body-parser')
const port = 8000


app.use(cors())
app.use(bodyparser.json({ extended: true}))
app.use(bodyparser.urlencoded({ extended: true}))
app.use('/', routes)

const start = async () => {
    try{
        await connect()
        app.listen(port, () => console.log(`app is listening to port ${port}`))
    } catch(err){
        console.log(err);
    }
}

start()