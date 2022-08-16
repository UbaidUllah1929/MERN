// Load HTTP module
const { appendFile } = require("fs");
const http = require("http");
const express=require("express");
const app=express();
const bodyParser = require('body-parser')
const path=require("path")
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());



const hostname = "127.0.0.1";
const port = 8000;

app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname+'/index.html'));
   

});
// app.post("/api/information",(req,res)=>{
//    // res.send(`<h1> Name:${req.body.name}  Email:${req.body.email} Password:${req.body.password}</h1>`)
//    const name=req.body.name
//    const email=req.body.email
//    const password=req.body.password
//    res.json({
//       success:true,
//       Name:name,
//       Email:email,
//       password:password
//    })   
//    console.log(req.body);
   

// });
app.get("/about",(req,res)=>{
   res.send("<h1>Hello To About Page</h1>");

});
app.get("/contact",(req,res)=>{
   res.send("<h1>Hello To contact Page</h1>");

});

// Prints a log once the server starts listening
app.listen(port, hostname, ()=> {
   console.log(`Server running at http://${hostname}:${port}/`);
})