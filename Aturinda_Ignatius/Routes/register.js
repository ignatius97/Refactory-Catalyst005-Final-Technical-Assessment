const express = require('express');
const mongoose = require('mongoose');


require('../Models/regmodel');

const RegModel = mongoose.model('RegModel');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('register')
})



router.post('/submit',(req , res)=>{
    console.log(req.body);
    const regModel = new RegModel(req.body)
    regModel.save()
      .then(() => { 
          res.send('success');
        })
      .catch((err) => {
        console.log(err);
        res.send('Sorry! Something went wrong.');
      });

});



module.exports = router;