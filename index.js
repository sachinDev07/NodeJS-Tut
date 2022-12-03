const express = require('express');

require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());

// Inserting data...
app.post('/create', async (req,resp)=>{
  //for storing data in the database
  let data = new Product(req.body);
  let result = await data.save();

  console.log(result);
  resp.send(result);
});

// getting data or reading data..
app.get('/list', async (res,resp)=>{
  let data = await Product.find();
  resp.send(data);
})

// deleting data from the database with api
app.delete('/delete/:_id', async (req,resp)=>{
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  resp.send(data);
})

// updating with api..
app.put('/update/:_id', async (req,resp)=>{
  console.log(req.params);
  let data = await Product.updateOne(
    req.params,
    {$set: req.body}
  );
  resp.send(data);
})

app.listen(5000);