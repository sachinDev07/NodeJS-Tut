// const colors = require('colors');
// console.log(colors.yellow("hello Sachin"));

// chalk module

// const chalk = require("chalk");

// Printing the text
// console.log(chalk.red("Sachin"));
// console.log(chalk.red.underline("Sachin"));
// console.log(chalk.red.underline.bold("Sachin Kumar"));

//  Creating Searver And API

// const http = require('http');
// const data = require('./data');

// http.createServer((req, resp) => {
//     resp.writeHead(200, {
//         'Content-Type': 'application\json'
//     })

//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5000);

// file system module

// const fs = require('fs');
// const path = require('path');

//  const dirPath = path.join(__dirname,'files');

// for(let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,"new hello file");
// }

// fs.readdir(dirPath,(err,files) => {
//     files.forEach(element => {
//         console.log("file name is : ",element);
//     });
// })

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;

// Create a file
// fs.writeFileSync(filePath,'This is a new text file');

// reading a file ......
// fs.readFile(filePath,'utf-8',(err, item) => {
//     if(err) {
//         throw console.log('This is an Error!');
//     }
//     else {
//         console.log(item);
//     }
// })

// update a file
// fs.appendFile(filePath,'\nYou can start coding from here...',(err) => {
//     if(err) {
//         throw console.log('Error: File is not updating');
//     }
//     else {
//         console.log("File is updated");
//     }
// });

// rename a file
// fs.rename(filePath,`${dirPath}/banana.txt`,(err) => {
//     if(err) {
//         throw console.log('Error: File name is not updated');
//     }
//     else {
//         console.log("File name is updated");
//     }
// })

// Delete a file
// fs.unlinkSync(`${dirPath}/banana.txt`);

// Asynchronous language
// let a = 10;
// let b = 10;

// setTimeout(()=> {
//     b = 20;
// },2000);

// console.log(a+b);

// Handle Asynchronous Language...
// waitingData = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         resolve(30);
//     },2000)
// })

// waitingData.then((b) => {
//     let data = b;
//     console.log(a+data);
// })

// Creating a homepage and about page
// const express = require('express');
// const app = express();

// app.get('',(req, resp) => {
//     // console.log("Data sent by browser -->>", req.query.name)
//     // console.log("Data sent by browser ==> ", );
//     resp.send('welcome ');
// });

// app.get('/about',(req, resp) => {
//     resp.send(`
//     <h1>This is a HomePage</h1>
//     `);
// });

// app.get('/help',(req, resp) => {
//     resp.send([
//         {
//             name : 'Sachin',
//             email : 'sachin@gmail.com'
//         },
//         {
//             name : 'sam',
//             email : 'sam@gmail.com'
//         },
//     ]);
// });

// app.get('/blog',(req, resp) => {
//     resp.send(`
//     <input type="text" placeholder="write here" value="${req.query.name}">
//     <button>Click Me</button>
//     `);
// });

// app.listen(9000);

// Creating HTML pages
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname,'public');

// app.use(express.static(publicPath));

// app.set('view engine','ejs');

// app.get('',(req, resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// })

// app.get('/profile',(_,resp)=> {
//     const user = {
//         name : 'Sachin kumar',
//         email : 'sachin@gmail.con',
//         city : 'USA',
//         skills : ['JavaScript','C++','java', 'WebDevlopment','NodeJs']
//     }
//     resp.render('profile',{user});
// });

// app.get('/login',(_,resp) => {
//     resp.render('login');
// })

// app.get('/about',(req, resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// })

// app.get('*',(req, resp) => {
//     resp.sendFile(`${publicPath}/notPageFound.html`);
// })

// app.listen(9000);

// MiddleWare
// const express = require('express');
// const app = express();

// const reqFilter = (req, resp, next) => {
//     if(!req.query.age) {
//         resp.send('Please provide the age');
//     }
//     else if(req.query.age<18) {
//         resp.send('You are not eligible for this site');
//     }
//     else {
//         next();
//     }
// }

// app.use(reqFilter);

// app.get('/',(req, resp) => {
//     resp.send('Welcome to Home page');
// });

// app.get('/about',(req, resp) => {
//     resp.send('Welcome to About page');
// })

// app.get('/user',(req, resp) => {
//     resp.send('Welcome to User page');
// })

// app.listen(7000);

// for only specific page
// const express = require('express');
// const reqFilter = require('./middleware');

// const app = express();

// // app.use(reqFilter);

// app.get('/', reqFilter, (req, resp) => {
//     resp.send('Welcome to Home page');
// });

// app.get('/about',(req, resp) => {
//     resp.send('Welcome to About page');
// })

// app.get('/user',reqFilter,(req, resp) => {
//     resp.send('Welcome to User page');
// })

// app.listen(7000);


// reading a data

// const dbConnect= require('./mongodb');

// const main=async ()=>{
//    let data = await dbConnect();
//    data = await data.find().toArray();
//    console.log(data)
// }

// main()


//  💡💡💡 --- Mongoose --- 💡💡💡

const mongoose = require('mongoose');

const main = async () => {
   // connecting to the database
   await mongoose.connect('mongodb://0.0.0.0:27017/ecom');
   const ProductSchema = new mongoose.Schema({
      name:String,
      price:Number
   });

   const ProductModel = mongoose.model('products', ProductSchema);
   let data = new ProductModel({name:"Iphone 15",price:1000});
   let result = await data.save();
   console.log(result);
}

main();


