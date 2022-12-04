const mysql = require('mysql');
const con = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'test'
});
// this code is for checking whether connected or not..
// con.connect((err)=>{
//    if(err){
//       console.log(err);
//    }
//    else{
//       console.log("connected");
//    }
// });

con.query("select * from student", (err, result)=>{
   console.warn("result",result);
})