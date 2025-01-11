const mongoose = require('mongoose');

const { Schema } = mongoose;


const blogSchema = new Schema({
  title: {type: String },
  description: {type: String}
});

const Model = mongoose.model("Test", blogSchema)

module.exports = Model