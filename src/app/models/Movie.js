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

// Mongoose Soft Delete
const mongooseDelete = require('mongoose-delete');
Movie.plugin(mongooseDelete, {overrideMethods: 'all', deletedAt: true});

module.exports = mongoose.model('Movie', Movie);
