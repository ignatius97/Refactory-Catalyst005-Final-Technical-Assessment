const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// creating an instance of the schema
const registerSchema = new Schema({

    surname: String,
    given_name: String,
    dob: String,
    place_of_residence: String,
    occupation: String,
    nationality: String,
    gender: String,
    categories: String,
   
})
// converting a schema to a model
const RegModel = mongoose.model('RegModel', registerSchema);

module.exports = RegModel;