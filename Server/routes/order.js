const express = require("express");
const Order = require("../models/Orders");
const order = express.Router();

order.post("/order",async(req,res)=>{
    const { name,mail,through,city,address,contact,iteams,realPrice,pt } = req.body;

    console.log(name,mail,through,city,address,contact,iteams,realPrice,pt)
    try {
        const newOrder = new Order({
            uname : name,
            uemail : mail,
            reactType : through,
            city : city,
            address :  address,
            number : contact,
            items : [iteams],
            totalAmount : realPrice,
            paymentMethod : pt
        });
        await newOrder.save();
        return res.json({name,mail,through,city,address,contact,iteams,realPrice,pt }).status(200)
    } catch (error) {
      console.log(error)
    }
})

order.get("/getorder",async(req,res)=>{
    try {

        const allOrders = await Order.find();
        res.json(allOrders)
        if(allOrders){
            return res.json(allOrders).status(200)
        }else{
            
        }
    } catch (error) {
      console.log(error)
    }
})

module.exports = order