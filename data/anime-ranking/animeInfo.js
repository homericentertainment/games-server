const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    characters: {
        type: Object,
        required: true,  
    }
}, { timestamps: true, minimize: false })

const AnimeRankingAnimeInfo = mongoose.model('ranking-animes', animeSchema)
module.exports = AnimeRankingAnimeInfo