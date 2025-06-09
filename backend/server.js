const express = require("express");
const app = express();
app.listen(5000, () => {
    console.log('Server created');
})

app.use("/", (req, res) => {
    res.send("Hello, World!");
})