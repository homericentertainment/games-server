const express = require('express')
const router = express.Router()
const AnimeRankingUserInfo = require('../data/anime-ranking/userInfo')

router.get('/get-user/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await AnimeRankingUserInfo.findOne({ id })
        res.json(user)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

router.post('/create-user', async (req, res) => {
    try {
        const { user } = req.body
        const newUser = new AnimeRankingUserInfo({
            name: user.name,
            savedAnime: {}
        })
        await newUser.save()
        res.json(newUser)
    } catch (err) {
        console.log(err)
        res.status(400).send('Something went wrong')
    }
})

module.exports = router