const mongoose = require('mongoose')
const connect = () => {
    const URL = ''
    try{
        mongoose.connect(URL, {});
    } catch(error){
        console.log('error while connecting database:' , error);
    }
}

module.exports = {connect}