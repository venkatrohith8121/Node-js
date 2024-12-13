import fs from 'fs'
import { json } from 'stream/consumers'
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) {
        console.log(`unable to read${err}`)
    }
    else{
        let users=JSON.parse(data)
        let Male_users=users.filter(user=>user.gender==='Male')
        let Female_users=users.filter(user=>user.gender==='Female')
        fs.writeFile('Male.json',JSON.stringify(Male_users),(err=>{
            if(err) throw err
            console.log("New file created")
        }))
        fs.writeFile('Female.json',JSON.stringify(Female_users),(err=>{
            if(err) throw err
            console.log("New file created")
        }))
    }
})