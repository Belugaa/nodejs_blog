const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxlength: 255 },
        price: { type: String, maxlength: 600 },
        image: { type: String, maxlength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
