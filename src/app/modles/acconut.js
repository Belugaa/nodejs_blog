const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Account = new Schema(
    {
        nameAcc: { type: String, maxlength: 255 },
        passAcc: { type: String, maxlength: 600 },
        confirmPass: { type: String, maxlength: 255 },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Account', Account);
