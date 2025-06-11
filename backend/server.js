const express = require("express");
const mongoose = require("express");
//librari per mongoose
const app = express();


app.use("/", (req, res) => {
    res.send("Hello, World!");
})

//lidhja me databazen 
mongoose.connect("mongodb+srv://StelinaPazaj:@cluster0.l2gkpyw.mongodb.net/mernProject?retryWrites=true&w=majority&appName=Cluster0")
.then() (()=> console.log("db connected"))
.catch((err) => console.log("db not connected "+ err))



app.listen(5000, () => {
    console.log('Server created');
})