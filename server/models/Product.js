const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  artist: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;