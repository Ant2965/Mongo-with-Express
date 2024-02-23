const express = require("express")
const mongoose = require("mongoose");
const path = require('path')
const chat = require("./models/chat.js")
const app = express();
app.use(express.urlencoded({extended: true}))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");




main().then(() => {
    console.log("connected")
})

main().catch(err => {
    console.log(err)
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


//Index 

app.get("/chats",async(req,res)=>{
    let chats= await chat.find()
    console.log(chats)
    res.render("index.ejs",{chats})
})





app.get("/", (req, res) => {
    res.send("root work")
})


app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})

//route

app.get("/chats", (req,res)=>{

    let {from,to,msg}=req.body;

    let newchat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })

    console.log(newchat)
    res.send("works newchat")

})



app.listen(8100, () => {
    console.log("server on port 6000")
})