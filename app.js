import express from 'express';
import fs from 'fs';
//import userapi form 'userapi.json';



const app = express();
const port = process.env.PORT || '8000';
 
app.get('/student/getDetails',(req,res) =>{
    fs.readFile('./API/userapi.json',"utf-8",(err,data) =>{
        
        if(err){
            return err;
        }

        res.end(data);
  });
});


 

//Server
app.listen(port, () =>{
    console.log("Server Running")
})