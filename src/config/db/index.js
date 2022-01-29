const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/list-courses');
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect Failed');
    }
}

module.exports = { connect };
