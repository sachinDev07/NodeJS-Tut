const express = require('express');
const con =require('./config');
const app = express();

app.use(express.json()); // for converting request body into json format

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

// put api...updating data
app.put('/:firstname', (req, resp) => {
   const data = [req.body.firstname, req.body.lastname, req.params.firstname];
   con.query('UPDATE student SET firstname = ?, lastname = ? where firstname = ?', data, (err, result, fields)=>{
      if(err){
         resp.send(err)
      }else {
         resp.send(result)
      }
   })
})

app.listen(5000);