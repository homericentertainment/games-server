const mongoose = require('mongoose')
const Schema = mongoose.Schema


const objSchema = new Schema({
    likes:{
        type:Object ,
        required: true,
        minimize: false
    },
    cancelled:{
        type:Boolean,
        required: true       
    },
    winnerAnnounced:{
        type:Boolean,
        required:false,
        default:false
    },
    creatorStarted:{
        type:Boolean,
        required:false,
        default:false
    }
    
},{timestamps:true, minimize: false})

objSchema.index({ category:"text", game:"text", geometry: '2dsphere'})
const objInfo = mongoose.model('EventsInfo', EventInfoSchema)
module.exports = EventInfo