const mongoose =require("mongoose");
const chat = require("./models/chat.js")

main().then(() => {
    console.log("connected")
})

main().catch(err => {
    console.log(err)
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allchats = [
    
    {
        from: "neha",
        to: "priya",
        msg: "send me new logo",
        created_at: new Date()
    },
    
    
    {
        from: "a",
        to: "b",
        msg: "send me new logo",
        created_at: new Date()
    },
    
    {
        from: "ha",
        to: "iya",
        msg: "send me new logo",
        created_at: new Date()
    }
    ,
    
    {
        from: "nea",
        to: "riya",
        msg: "send me new logo",
        created_at: new Date()
    }
    
    
    ]

 chat.insertMany(allchats);

