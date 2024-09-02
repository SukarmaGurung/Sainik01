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
        await product.save();
        res.json({success:true,message:"Product Added"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }


}
//all product list 
const listProduct = async (req,res)=>{
    try {
        const products = await productmodel.find({});
        res.json({success:true,data:products})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
       
        
    }


}

//remove product item
const removeProduct = async (req,res)=>{
    try {
        const product = await productmodel.findById(req.body.id);
      fs.unlink(`uploads/${product.image}`,()=>{})
      await productmodel.findByIdAndDelete(req.body.id);
      res.json({success:true,message:"Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}
export{addProduct,listProduct,removeProduct}