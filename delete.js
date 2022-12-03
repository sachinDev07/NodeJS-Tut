const dbConnect = require('./mongodb')

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany(
            {name:'m40'}
    )
    console.warn(result);
    if(result.acknowledged)
    {
        console.warn("record deleted")
    }
}

deleteData();