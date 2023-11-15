const mongoose = require('mongoose');
const {INTEGER} = require('sequelize');
const {Schema} = mongoose;

const artworkSchema = new Schema({

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
  
  });
  
  const Artwork = mongoose.model('Artwork', artworkSchema);
  
  module.exports = Artwork;