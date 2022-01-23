
require('dotenv').config();
const express=require('express')
const Email=require('../model/emailMode.js')
const router=express.Router()

const mailTransporter=require('../middleware/mailer.js')

router.post('/',async(req,res)=>{
   try{
    await Email.deleteMany()
    const email=await Email.create(req.body)

    let arr=['1498','6445','2323','1986','6754','9876']

    const OTP=arr[(Math.floor(Math.random()*arr.length))]
    //console.log(email.otp);
    let receiver=email.email
    let mailDetails = {
        from: process.env.SMTP_USERNAME,
        to: receiver,
        subject: "OTP verification",
        text: null,
        html: `
              <h3>Your Verification OTP  is : ${Number(OTP)} </h3>
              <img src="https://techstory.in/wp-content/uploads/2018/01/groww-logo-300dpi.png"></img>
              <h4>Happy Trading </h4>  
              <h3> <strong>Team Groww</strong></34>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <div class="col l6 fm77CompanyName valign-wrapper">ⓒ&nbsp;2016-<!-- -->2022<!-- --> Groww. All rights reserved, Built with <span class="fm77HeartImg">♥</span>in India</div>
                    `,
      };
  
      mailTransporter.sendMail(mailDetails, async function (err, data) {
        if (err) {
          console.log("Error Occurs");
        } else {
          console.log("Email sent successfully");
        }
      });

   }catch(err){
   return res.send(err)
   }
})
// // let otp;
// router.get('/',async(req,res)=>{
//     try{
//         let otp=Math.floor(Math.random()*(9999-1000+1)+1000);
//    // return res.send(otp)
//     }
//     catch(err){
//        // console.log(otp);
//      res.send(err)
 
//     }
 
//  })

 module.exports=router;