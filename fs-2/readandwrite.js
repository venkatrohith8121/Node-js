import fs from 'fs'
fs.readFile('p1.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
    fs.writeFile('p2.txt',data,(err)=>{
        if(err) throw err
        console.log("file created successfuly")
    })
})