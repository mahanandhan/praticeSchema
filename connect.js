const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB