const mongoose = require('mongoose');
const { Schema } = mongoose;

const artworkSchema = new Schema({
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

});

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;