const express = require("express");
const User = require("../models/User");
const router = express.Router();
const {v4 : uuidv4} = require('uuid');
const {setUser} = require('../service/auth')
const bcrypt = require('bcrypt')

router.post("/signup", async (req, res) => {
  const { userName , email, password } = req.body;
    const user = await User.findOne({
      $or: [
        { email: email }, 
        { userName: userName }
      ]
    });

    try {
      if(!(user === null)){
        const message = "User already exist please login"
        return res.json({message,email});
      }
      else{ 
          const message = "signup successfully"
          const newUser = new User({ userName ,email, password });

          const storeUser = await newUser.save();
          console.log(storeUser)
          return res.json({message,userName}).status(200)
      }
    } catch (error) {
      console.log(error)
    }
});

router.post("/login", async (req, res) => {
    const { userName , email , password } = req.body;
  
      const user = await User.findOne({
        $or: [
          { email: email }, 
          { userName: userName }
        ]
      });
      if(!(user === null)){

        const isMatch = await bcrypt.compare(password,user.password)
          if(isMatch && !user.isAdmin)
          {
              const sessionId = uuidv4();
              setUser(sessionId,user)
              const message = "Login success"
              return res.json({message,user}).status(200)
          }
          else{
            if(user.isAdmin){
              const message = "User not Found"
              return res.json({message,email})
            }
              const message = "Incorrect username or password"
              return res.json({message,user}).status(200)
          }

      }
      else{
        const message = "User not Found"
        return res.json({message,email})
      }
  });

router.get("/getusers", async (req, res) => {

     try {
      const users = await User.find({isAdmin : "true"});
      const Nausers = await User.find({isAdmin : "false"});
      console.log("users are",Nausers)
      res.json({users,Nausers})
    } catch (error) {
      console.log(error)
     }
  });

router.post("/getusers", async (req, res) => {

    const {email,password} = req.body;

     try {
      const users = await User.find({isAdmin : "true"});
      res.json(users)      
    } catch (error) {
      console.log(error)
     }
  });

router.post("/getdemousers", async (req, res) => {

    const {email} = req.body;
    console.log(req.body)

     try {
      const user = await User.findOne({email});
      console.log(user)
      if(user){
        const isMatch = await User.deleteOne({email});
        if(isMatch){
          const users = await User.find();
          const message = "deleted successfully";
          res.json({message,users})
        }
        else{
          const message = "Delete fails"
          res.json({message,email})
        }
      }else{
        const message = "User not Matched";
        res.json({message,email})
      }
  
    } catch (error) {
      console.log(error)
     }
  });

router.post("/deleteusers", async (req, res) => {

    const email = req.body.email;
     try {
      const user = await User.deleteOne({email});
      const message = "deleted successfully";
      res.json({message,email})
     } catch (error) {
      console.log(error)
     }
  });

router.post("/addAdmin", async (req, res) => {
    const {email,password} = req.body;

    console.log(req.body)
     try {
      const user = await User.findOne({email});

      console.log(user)
      if(user){
        if(user.isAdmin){
          const message = "This user already Admin"
          res.json({message,email}) 
        }else{
          await User.updateOne({email}, {$set : {isAdmin : true}});

          const message = "User updated in admin"
          res.json({message,email})
        }
      }else{
        const message = "User not found";
        res.json({message})
      }
     } catch (error) {
      console.log(error)
     }
  });

module.exports = router;