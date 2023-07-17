const mongoose = require('mongoose')
const Schema = mongoose.Schema

const farmSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    videoId: {
        type: String,
        required: true
    }
}, { timestamps: true, minimize: false })


const FarmcraftFarmInfo = mongoose.model('farm-farms', farmSchema)
module.exports = FarmcraftFarmInfo