const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    title: {
        type: String,
        require: trusted,
        unique: true
    },
    contentUrl: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true,
        min: 1
    }

})

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    instructionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    lessons: [lessonSchema]
})

module.exports = mongoose.model("Course", CourseSchema);