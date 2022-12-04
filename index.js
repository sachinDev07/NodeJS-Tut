const express = require('express');
const con =require('./config');
const app = express();

app.use(express.json());

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

// post api...inserting data
app.post('/', (req,resp)=>{
   const data = req.body;
   con.query('INSERT INTO student SET ?', data, (err, result, fields)=> {
      if(err){
         resp.send('error')
      }else {
         resp.send(result)
      }
   })
});

app.listen(5000);