const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
}, { timestamps: true, minimize: false })

const FarmcraftCategoryInfo = mongoose.model('farm-categories', categorySchema)
module.exports = FarmcraftCategoryInfo