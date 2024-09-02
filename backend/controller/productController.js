import productmodel from "../models/productmodel.js";
import fs from "fs"


//add product item
const addProduct = async(req,res ) => {
    let image_filename = `${req.file.filename}`;
    const product = new productmodel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category



    })
    try {
        await food.save();
        res.json({success:true,message:"Product Added"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }


}
export{addProduct}