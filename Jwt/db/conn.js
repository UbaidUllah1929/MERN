const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/register", 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log("connection Successful"))
    .catch((err) => console.log(`erro due to ${err}`));