const express=require("express");
const app = express();
const port=process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send("<h1>Paractice for Restful Api</h1>");

}
)

app.post('/', (req,res)=>{
    res.send("<h1>Student</h1>");

}
)
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})