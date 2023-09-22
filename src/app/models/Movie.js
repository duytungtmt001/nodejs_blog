const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
    name: { type: String, maxLength: 255 },
    year: { type: Number, maxLength: 32 },
    age: { type: Number, maxLength: 32 },
});

module.exports = mongoose.model('Movie', Movie);
