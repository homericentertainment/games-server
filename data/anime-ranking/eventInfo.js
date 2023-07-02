const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    votes: {
        type: Object,
        required: true,
    },
    participants: {
        type: Array,
        required: true,
    },
    voters: {
        type: Object,
        required: false,
        default:{}
    },
    status: {
        type: String,
        required: false,
        default: "new"
    }

}, { timestamps: true, minimize: false })

// recipeSchema.index({ category:"text", game:"text", geometry: '2dsphere'})
const AnimeRankingEventInfo = mongoose.model('ranking-events', eventSchema)
module.exports = AnimeRankingEventInfo