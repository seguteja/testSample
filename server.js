const express=require('express');

const app=new express();

app.get('/',async(req,res)=>{
    res.send("Successfully deployed for second time")
});

app.listen(8080,()=>{
    console.log("server started")
})
