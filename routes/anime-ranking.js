const express = require('express')
const router = express.Router()
const AnimeRankingUserInfo = require('../data/anime-ranking/userInfo')
const AnimeRankingEventInfo = require('../data/anime-ranking/eventInfo')

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

router.get('/get-saved/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await AnimeRankingUserInfo.findOne({ id })
        res.json(user.saved)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

router.get('/get-current-event', async (req, res) => {
    try {
        const event = await AnimeRankingEventInfo.findOne({ status: "current" })
        res.json(event)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

router.post('/create-event', async (req, res) => {
    try {
        const newEvent = new AnimeRankingEventInfo({
            "title": "best protagonist",
            "votes": {
                'luffy': 0,
                'boruto san': 0,
                'saitama': 0,
                'goku': 0,
            },
            "participants": ['luffy', 'boruto san', 'saitama', 'goku'],
            "status": "current"
        })
        await newEvent.save()
    }
    catch {
        res.status(400).send('Something went wrong')
    }
})

router.put('/vote/:id', async (req, res) => {
    const {id} = req.params
    const {chosen} = req.body
    try {
        const event = await AnimeRankingEventInfo.findOne({ status: "current" })
        const votes = event.votes
        votes[chosen] += 1
        const voters = event.voters
        voters[id] = true
        await AnimeRankingEventInfo.updateOne({ status: "current" }, { votes,voters })
        res.json(true)
    }
    catch {
        res.status(400).send('Something went wrong')
    }
})


module.exports = router