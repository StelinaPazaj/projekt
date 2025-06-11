const express = require("express")
const mongoose = require ("mongoose")
const ContactModel = require ("../models/contactModels")

const app = express();

//kalimi i info ne data baze
app.post("/addContact", async (req, res) => {
    try{
        //req.body info nga fronti ose ndryshe react 
        console.log(req.body);
        const newContact = new ContactModel(req.body);
        newContact.save();
        res.status(200).send(newContact);
    } catch (err) {
        console.log("not add info " +err )
        res.status(500).send("not add info" +err)
    }

})

module.exports=app 