import mongoose from "mongoose";

 export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://SainikHardware:Gurung4321@cluster0.td19a.mongodb.net/Sainik Hardware').then(()=>console.log('DB CONNECTED'));
}