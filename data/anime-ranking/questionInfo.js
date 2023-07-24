const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    answers: {
        type: Array,
        required: true,  
    },
    correct:{
        type: String,
        required: true,
    },
}, { timestamps: true, minimize: false })

const AnimeRankingQuestionInfo = mongoose.model('ranking-questions', questionSchema)
module.exports = AnimeRankingQuestionInfo