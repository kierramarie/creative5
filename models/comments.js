var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  title: String
});

mongoose.model('Book', BookSchema);
