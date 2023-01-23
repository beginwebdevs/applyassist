const mongoose = require('mongoose');
require('dotenv').config()
// const mongoURI = "mongodb+srv://vintflea:vintflea03@vintflea.vm2zirj.mongodb.net/vintflea?retryWrites=true&w=majority";
const mongoURI = "mongodb+srv://applyassist:applyassist03@applyassist.zeq0qjn.mongodb.net/applyassist?retryWrites=true&w=majority";


const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=> {
        console.log("Connected to Mongo DB Successfully");
    })
}

module.exports = connectToMongo;