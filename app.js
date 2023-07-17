const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser1 = require('body-parser')
const mongoose = require('mongoose')

const utils = require('./routes/util-routes')
const animeRecipes = require('./routes/anime-recipes')
const animeRanking = require('./routes/anime-ranking')
const farmcraft = require('./routes/farmcraftRoutes')

let keys = process.env.NODE_ENV === 'production' ? '' : require('./keys')
const uri = `mongodb+srv://homericentertainment:${process.env.NODE_ENV === 'production' ? process.env.mongo : keys.mongo}@ganescluster.tyeeph2.mongodb.net/`
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to mongoDB")
}).catch((err) => console.log("DATABASE CONNECTION FAILED", err))

app.set('view engine', 'ejs')
app.use(morgan('dev'))

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ?
    '*' :
    ['http://localhost:3000', 'http://localhost:3000/', 'http://localhost:3001', 'http://localhost:3001/','http://localhost:19000'],
  credentials: true
}
app.use(cors(corsOptions))
app.use(bodyParser1.urlencoded({ extended: false }))
app.use(bodyParser1.json())

app.use(utils)
app.use('/utils', utils)
app.use('/anime-recipes', animeRecipes)
app.use('/anime-ranking', animeRanking)
app.use('/farmcraft', farmcraft)

app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      mesage: error.mesage
    }
  })
})

module.exports = app 