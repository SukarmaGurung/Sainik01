import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
//import Stripe from "stripe";


const secretKey = process.env.ESEWA_SECRET_KEY

// placing userorder from frontend
const placeOrder = async (req,res) =>{

    const frontend_url = "http://localhost:5173"
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

          const line_items = req.body.items.map((item)=>({
            price_data:{
              currency:"npr",
              product_data:{
                name:item.name
              },
              unit_Amount:item.price * 100

        },
        quantity:item.quantity
        })
    )
    line_items.push({
        price_data:{
            currency:"npr",
            product_data:{
                name:"Delivery Charges"
              },
              unit_Amount: 100* 100
        },
        quantity:1
    })   

    const session = await stripe.checkout.sessions.create({
        line_items:line_items,
        mode:"Payment",
        sucess_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    })
      res.json({success:true,session_url:session.url})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }
}
export {placeOrder}


