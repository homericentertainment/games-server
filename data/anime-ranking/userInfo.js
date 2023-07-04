const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    saved:{
        type:Object,
        required:false,
        default:{}
    }
    
}, { timestamps: true, minimize: false })

// recipeSchema.index({ category:"text", game:"text", geometry: '2dsphere'})
const AnimeRankingUserInfo = mongoose.model('ranking-users', userSchema)
module.exports = AnimeRankingUserInfo