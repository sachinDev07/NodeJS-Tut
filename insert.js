const dbConnect = require('./mongodb');

const insertData = async () => {
    const db = await dbConnect();
    const result =await db.insertMany([
        {name:'max pro', brand:'apple',price:2000},
        {name:'max pro 7', brand:'apple',price:3000},
        {name:'max pro 8', brand:'apple',price:4000}        
    ])
    
    if(result.acknowledged)
    {
        console.warn("data is inserted")
    }
}  

insertData();