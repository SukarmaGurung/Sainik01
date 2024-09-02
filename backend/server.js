import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";


//app config
const app = express();
const port = 3000

//middleware
app.use(express.json())
app.use (cors())

//db connection
connectDB();

//api end point
app.use('/api/product',productRouter)
app.use('/images',express.static('uploads'))

app.get("/",(req,res)=>{
    res.send('API WORKING')
})
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
//mongodb+srv://SainikHardware:Gurung4321@cluster0.td19a.mongodb.net/?