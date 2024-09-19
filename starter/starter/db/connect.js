const mongoose = require('mongoose')

const connectDB = (url)=>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB

//03-TASK-MANAGER a database with this name will be created