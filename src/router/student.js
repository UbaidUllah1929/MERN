const express=require("express");
const router=new express.Router();
const Student=require('../models/student')

//post api
router.post('/student', async (req, res) => {
    try {
        const user = new Student(req.body);
        const createuser = await user.save();
        res.status(201).send(createuser);
    }
    catch(e){
        res.status(400).send(e);
    }

})

// specific student 
router.get('/student/:id', async (req, res) => {
    try {
        const _id=req.params.id;
        const studentdata = await Student.findById(_id);
        if(!studentdata){
           return res.status(404).send("page Not Found");    
        }
        else{
            res.status(201).send(studentdata);
        }
        
    }
    catch(e){
        res.status(500).send(e);
    }

})
// get api

router.get('/student', async (req, res) => {
    try {
        
        const createuser = await Student.find();
        res.status(201).send(createuser);
    }
    catch(e){
        res.status(400).send(e);
    }

})

//update api
router.patch('/student/:id', async (req, res) => {
    try {
        const _id=req.params.id;
        const updatedata = await Student.findByIdAndUpdate(_id,req.body);
        console.log(updatedata);
        res.send(updatedata);
    }
    catch(e){
        res.status(404).send(e);
    }

})
// delete api
router.delete('/student/:id', async (req, res) => {
    try {
        const deletedata = await Student.findByIdAndDelete(req.params.id);
        console.log(deletedata);
        if(!req.params.id){
            res.send(400).send()
        }
        res.send(deletedata);
    }
    catch(e){
        res.status(404).send(e);
    }

})

module.exports=router;