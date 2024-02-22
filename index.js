const express =require("express")

const app =express();


app.get("/",(req,res)=>{
    res.send("root work")
})











app.listen(8100,()=>{
    console.log("server on port 6000")
})