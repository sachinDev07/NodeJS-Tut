// Connecting NodeJs to the Mongodb 
const {MongoClient} = require('mongodb')
const url = 'mongodb://0.0.0.0:27017/'
const dataBase = 'ecom'
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(dataBase);
  return db.collection('products');  
}

module.exports = dbConnect;