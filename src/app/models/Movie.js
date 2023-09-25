const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Mongoose Slug
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Movie = new Schema(
    {
        name: { type: String, maxLength: 255 },
        year: { type: Number, maxLength: 32 },
        image: { type: String, maxLength: 255 },
        description: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Movie', Movie);
