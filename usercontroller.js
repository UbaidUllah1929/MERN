app.post("/api/information",(req,res)=>{
    // res.send(`<h1> Name:${req.body.name}  Email:${req.body.email} Password:${req.body.password}</h1>`)
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    res.json({
       success:true,
       Name:name,
       Email:email,
       password:password
    })   
    console.log(req.body);
    
 
 });