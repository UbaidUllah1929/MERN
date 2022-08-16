const express = require("express");
// const bodyParser = require('body-parser');
require("./db/conn");
const Student = require('./models/student');
const Studentrouter=require('./router/student')
const app = express();

// app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(Studentrouter);
const port = process.env.PORT || 4000;

// app.post('/student', (req,res)=>{
//         console.log(req.body);
//         const user =new Student(req.body);

//         user.save()
//         .then(()=>res.status(200).send(user))
//         .catch((error)=>res.status(400).send(error))
// })


app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})