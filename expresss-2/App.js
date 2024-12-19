import express from 'express'
let app=express()

app.get("/",(req,resp)=>{
    resp.send("Root Request- get method")
})
app.post("/create",(req,resp)=>{
    resp.send("Root Request- create method")
})
app.put("/update",(req,resp)=>{
    resp.send("Root Request- update method")
})
app.delete("/delete",(req,resp)=>{
    resp.send("Root Request- delete method")
})

app.listen(8880,'127.0.0.1',(err)=>{
    if (err) throw err
    console.log(`server is running! http://127.0.01:8880`)
})