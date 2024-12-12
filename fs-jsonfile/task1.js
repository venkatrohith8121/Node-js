import fs from 'fs'
import { clearLine } from 'readline'
fs.readFile('users.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(typeof data)
    let users=JSON.parse(data)
    console.log(typeof data)
    for (let user of users) {
        console.log(user.name)
    }
})