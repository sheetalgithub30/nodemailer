import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const port =6969;
const app = express();
app.use(cors({options:"*"}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.post("/sendEmail",(req,res)=>{
   const {name,email,message} = req.body;
   const transporter = nodemailer.createTransport({
    service :"gmail",
    auth:{
        user:process.env.MY_EMAIL,
        pass:process.env.PASSWORD
    }
   })

   let msg={
     from:process.env.MY_EMAIL,
     to:process.env.MY_EMAIL,
     subject :"You have a new message",
     text:`${name} with email ${email} has a message for you - ${message}`
   }

   transporter.sendMail(msg).then((info)=>{
    console.log("Email sent: " + info.response);
   })
   .catch((err)=>console.log(err));

})

app.listen(port,()=> console.log("Server has started"));

