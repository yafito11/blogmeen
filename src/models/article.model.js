const mongoose = require('mongoose')
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    subtitle: {
        required: true,
        type: String
    },
    content: {
        type: String
    },
})

module.exports = mongoose.model('Article', articleSchema)