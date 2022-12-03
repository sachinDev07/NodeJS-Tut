const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
            {name:'m40'},
            {$set:{name:'max pro 5', branc:'apple'}}
    );
    console.warn(result);
}

updateData();