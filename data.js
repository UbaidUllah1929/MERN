const mongoose = require("mongoose");
const validator=require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/studentdetails", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection Successful")
    ).catch((err) => console.log(`erro due to ${err}`));

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        minlength:6,
        maxlength:30
    },
    fname: String,
    rollno: Number,
    age:{ 
        type:Number,
        validate(value){
            if (value<0){
                throw new Error("age value should be positive")
            }
        }
    },
    gender:{
        type:String,
        enum:["Male","Female","Other"]
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }

    }
});

const student = new mongoose.model("student", studentSchema);

const studentDocument=async()=>{
    try{
        const studentData = new student({
            name: "FerozKhan",
            fname: "KifayatUllah",
            rollno: 0415,
            age: 27,
            gender: "Male",
            email:"uu199394@gmail.com",
            active: true
        
        })
        const studentData1 = new student({
            name: "Ubaid Ullah",
            fname: "KifayatUllah",
            rollno: 0416,
            age: 27,
            gender: "Male",
            email:"uu199394@gmail.com",
            active: true
        
        })
        const studentData2= new student({
            name: "HizbUllah",
            fname: "KifayatUllah",
            rollno: 0417,
            age: 27,
            gender:"Male",
            active: true
        
        })
        const studentData3= new student({
            name: "SaifUllah",
            fname: "KifayatUllah",
            rollno:0411,
            age: 27,
            gender:"Male",
            active: true
        
        })
        const studentData4= new student({
            name: "Zara Bibi",
            fname: "KifayatUllah",
            rollno: 0412,
            age: 27,
            gender: "Female",
            active: true
        
        })
        const result=await student.insertMany([studentData,studentData1,studentData2,studentData3,studentData4]);
        console.log(result)
    }
    catch(error){
        console.log(error)
    }

}
studentDocument();

//                 Comparison Query Operators//

// $eq: Matches values that are equal to a specified value.

// $gt:Matches values that are greater than a specified value.

// $gte:Matches values that are greater than or equal to a specified value.

// $in:Matches any of the values specified in an array.

// $lt:Matches values that are less than a specified value.

// $lte:Matches values that are less than or equal to a specified value.

// $ne:Matches all values that are not equal to a specified value.

// $nin: Matches none of the values specified in an array.


// ################ Logical Operator ###########//

// $and : Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// $not : Inverts the effect of a query expression and returns documents that do not match the query expression.
// $nor : Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
// $or  : Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

// const getdata = async () =>{
//     try{
//         const result=await student.find({$or:[{name:"FerozKhan"},{age:26}]})
//         .select({name:1})
//         console.log(result)

//     }
//     catch(error){
//         console.log(error)

//     }
// }
// getdata();



// const updation=async (_id) =>{
//     try{
//         const result=await student.findByIdAndUpdate({_id},
//             {$set:{name:"Feroz Khan Gul"}})
//         console.log(result)

//     }
//     catch (error){
//         console.log(error)
//     }
// }
// updation('62cfbf4909353023b47fecb9');


// count and documents coun and sort function in mango db

// const getdata = async () =>{
//     try{
//         const result=await student.find({fname:"KifayatUllah"})
//         // .select({name:1}).countDocuments();
//         .select({name:1}).sort("name:-1");
//         console.log(result)

//     }
//     catch(error){
//         console.log(error)

//     }
// }
// getdata();

// const deletedata=async (_id) =>{
//     try{
//         const result=await student.findByIdAndDelete({_id});
//         console.log(result)

//     }
//     catch (error){
    
//         console.log(error)
//     }
// }
// deletedata('62cfbf4909353023b47fecb9');
