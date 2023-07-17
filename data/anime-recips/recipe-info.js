const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    foodName: {
        type: String,
        required: true
    },
    animeName: {
        type: String,
        required: true,
    },
    Time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    steps: {
        type: Array,
        required: true,
    },
    servingAmount:{
        type:Number,
        required:true
    }
}, { timestamps: true, minimize: false })

// recipeSchema.index({ category:"text", game:"text", geometry: '2dsphere'})
const RecipeInfo = mongoose.model('recipes', recipeSchema)
module.exports = RecipeInfo