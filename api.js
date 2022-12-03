const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb') // added library for deleted the data because for Id we need instance of object
const app = express();

// when we generally want to data from postman or request, then we have to use..
app.use(express.json());

// 💡 READING DATA WITH THE API
app.get('/', async (req, resp)=> {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
});

// 💡 INSERTING DATA WITH THE API IN THE DATABASE
app.post('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)
})

// 💡 UPDATING DATA WITH THE API IN THE DATABASE
app.put('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:"Iphone 13"},
        {$set:{name:"Iphone 12"}}
    )
    resp.send({result:"updated"})
})

// 💡 DELETING DATA WITH THE API FROM THE DATABASE
app.delete('/:id', async (req,resp)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})

app.listen(5556);
