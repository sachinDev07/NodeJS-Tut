const express = require('express');
const con =require('./config');
const app = express();

// get api 
app.get('/', (req,resp)=>{
   con.query("select * from student",(err, result) => {
      if(err){
         resp.send("error")
      }else {
         resp.send(result)
      }
   })
});

app.listen(5000);