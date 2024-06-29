const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  excerpt: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  PublicationDate: {
    type: Date,
    required: true
  },
  filePath: {
    type: String,
    required: true
  }
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
