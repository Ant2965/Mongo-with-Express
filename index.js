const express = require("express")
const mongoose = require("mongoose");
const path =require('path')
const chat =require("./models/chat.js")
const app = express();


 app.set("views",path.join(__dirname,"views"))
 app.set("view engine","ejs");




main().then(() => {
    console.log("connected")
})

main().catch(err => {
    console.log(err)
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



let chat1 =new chat({
    from: "neha",
    to: "priya",
    msg:"send me new logo",
    created_at: new Date()
});

chat1.save().then(res=>{
    console.log(res)
})










app.get("/", (req, res) => {
    res.send("root work")
})

app.listen(8100, () => {
    console.log("server on port 6000")
})