const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userId:{
        type:String,
        required:true
    }
}, { timestamps: true, minimize: false })

// recipeSchema.index({ category:"text", game:"text", geometry: '2dsphere'})
const AnimeRecipeUserInfo = mongoose.model('anime-recipes', userSchema)
module.exports = AnimeRecipeUserInfo