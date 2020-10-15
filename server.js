const express=require('express');
require('dotenv').config()
const {Deta}=require('deta');

app=express()
const deta=Deta(process.env.PROJECT_KEY)
const db=deta.Base('adults');
app.get('/add/:name/:age/:school',async (req,res)=>{
    await db.put({
        name:req.params.name,
        age:req.params.age,
        school:req.params.school
    })
    res.send("done")
});
app.get('/get',async(req,res)=>{
    const data=await db.fetch({ }).next()
    res.json(data)
});
app.listen(3453,()=>{
    console.log("listening")
});