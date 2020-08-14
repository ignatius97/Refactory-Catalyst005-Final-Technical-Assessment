const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();
//Importing the register route and assigning a variable Register to it
const Register = require('./Routes/register')

const app = express();
// Instructing which view engine to use
app.set('view engine', 'pug');
// Connecting to the views folder
app.set('views', './views');
//Setting path for static files
app.use(express.static('public'))


app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

   

//Connecting to the register route
app.use('/',Register)



app.get('*',(req,res)=>{
    res.send('no such route')
})

// Setting up the post for the project to run on
app.listen(5000,()=>{
    console.log('express running on 5000');
})