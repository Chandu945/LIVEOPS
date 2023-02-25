const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
const uri = "mongodb+srv://live:live@cluster0.zhrtbnp.mongodb.net/?retryWrites=true&w=majority"
const connect = async() =>{
    await mongoose.connect(uri,(err)=>{
        if(err){
            console.log('mongodb is not connected')
        }else{
            console.log("connected to mongo successfully")
        }
    })
}

module.exports = connect