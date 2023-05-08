const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const connect = async () => {
    const URL = process.env.CONNECTION_STRING
    try{
        await mongoose.connect(URL).then(() => console.log('Connected to DB'));
    } catch(error){
        console.log('error while connecting database:' , error);
    }
}
mongoose.set('strictQuery', false)

module.exports = {connect}