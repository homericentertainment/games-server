const express = require('express')
const router = express.Router()
const AnimeRankingUserInfo = require('../data/anime-ranking/userInfo')
const AnimeRankingEventInfo = require('../data/anime-ranking/eventInfo')
const AnimeRankingAnimeInfo = require('../data/anime-ranking/animeInfo')
const cron = require('node-cron')
cron.schedule('59 23 * * *', generateNewEvent)
// generateNewEvent()

async function generateNewEvent() {
    const questions = [
        //general
        ['best story', 'best animations', 'best openings', 'best anime overall', 'best soundtrack', 'best voice actors', 'best side characters'],
        //charactres
        ['best protagonist', 'best antagonist', 'best waifu'],
    ]

    const randomIndex1 = Math.floor(Math.random() * (questions.length))
    const randomIndex2 = Math.floor(Math.random() * (questions[randomIndex1].length))
    const randomQuestion = questions[randomIndex1][randomIndex2]

    try {
        await AnimeRankingEventInfo.updateMany({ status: 'current' }, { status: 'ended' })
        const animes = await AnimeRankingAnimeInfo.find({})
        const newEvent = new AnimeRankingEventInfo({
            "title": randomQuestion,
            "participants": getParticipants(animes, randomQuestion, randomIndex1, 4),
            "status": "current"
        })
        await newEvent.save()
        console.log('generated next event')
    }
    catch (err) {
        console.log(err)
    }
}

function getParticipants(animes, question, idx, participantsAmount) {
    const participants = {}
    if (idx === 0) while (Object.keys(participants).length < participantsAmount) {
        const r = Math.floor(Math.random() * animes.length)
        const anime = animes[r]
        const participant = {
            name: anime.name,
            image: anime.image,
            from: anime.name,
            animeImage: anime.image,
            votes: 0
        }
        participants[anime.name] = participant
    }
    else if (idx === 1) {
        let key = ''
        if (question === 'best protagonist') key = 'protagonist'
        else if (question === 'best antagonist') key = 'antagonist'
        else key = 'waifu'
        while (Object.keys(participants).length < participantsAmount) {
            const r = Math.floor(Math.random() * animes.length)
            const anime = animes[r]
            const participant = {
                name: anime.characters[key].name,
                image: anime.characters[key].image,
                from: anime.name,
                animeImage: anime.image,
                votes: 0
            }
            participants[anime.characters[key].name] = participant
        }
    }
    return participants
}




router.get('/get-user/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await AnimeRankingUserInfo.findOne({ id })
        return res.json(user)
    } catch (err) {
        return res.status(400).send('Something went wrong')
    }
})

router.post('/create-user', async (req, res) => {
    try {
        const { user } = req.body
        const newUser = new AnimeRankingUserInfo({
            name: user.name,
        })
        await newUser.save()
        return res.json(newUser)
    } catch (err) {
        console.log(err)
        return res.status(400).send('Something went wrong')
    }
})

router.get('/get-saved/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await AnimeRankingUserInfo.findOne({ id })
        return res.json(user.saved)
    } catch (err) {
        console.log(err)
        return res.status(400).send('Something went wrong')
    }
})

router.get('/get-current-event', async (req, res) => {
    try {
        const event = await AnimeRankingEventInfo.findOne({ status: "current" })
        return res.json(event)
    } catch (err) {
        return res.status(400).send('Something went wrong')
    }
})

router.post('/save-anime', async (req, res) => {
    const { id, animeName, image, spot, question } = req.body
    console.log(spot, question)
    try {
        const user = await AnimeRankingUserInfo.findOne({ id })
        const savedAnime = user.saved
        savedAnime[animeName] = { name: animeName, image, spot, question }
        const newAnime = await AnimeRankingUserInfo.updateOne({ id }, { saved: savedAnime })
        return res.json(newAnime)
    }
    catch (err) {
        console.log(err)
        return res.status(400).send('Something went wrong')
    }
})

router.delete('/delete-saved-anime', async (req, res) => {
    const { id, animeName } = req.body
    try {
        const user = await AnimeRankingUserInfo.findOne({ id })
        const savedAnime = user.saved
        delete savedAnime[animeName]
        await AnimeRankingUserInfo.updateOne({ id }, { saved: savedAnime })
        return res.json(true)
    }
    catch (err) {
        console.log(err)
        return res.status(400).send('Something went wrong')
    }
})

router.put('/vote/:id', async (req, res) => {
    const { id } = req.params
    const { chosen } = req.body
    try {
        const event = await AnimeRankingEventInfo.findOne({ status: "current" })
        const participants = event.participants
        participants[chosen].votes += 1
        const voters = event.voters
        voters[id] = true
        await AnimeRankingEventInfo.updateOne({ status: "current" }, { participants, voters })
        return res.json(true)
    }
    catch {
        return res.status(400).send('Something went wrong')
    }
})

router.post('/create-event', async (req, res) => {
    const generated = await generateNewEvent()
    if (generated) return res.json(true)
    else return res.status(400).send('Something went wrong')
})

module.exports = router
























async function create4Animes() {
    const pazHomo = new AnimeRankingAnimeInfo({
        "name": "Naruto",
        "image": "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
        "characters": {
            "protagonist": {
                name: "Naruto",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            },
            "antagonist": {
                name: "Madara",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            },
            "waifu": {
                name: "Sakura",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            }
        }
    })
    await pazHomo.save()
    const anime2 = new AnimeRankingAnimeInfo({
        "name": "One Piece",
        "image": "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
        "characters": {
            "protagonist": {
                name: "Luffy",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            },
            "antagonist": {
                name: "Blackbeard",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            },
            "waifu": {
                name: "Nami",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            }
        }
    })
    await anime2.save()
    const anime3 = new AnimeRankingAnimeInfo({
        "name": "Bleach",
        "image": "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
        "characters": {
            "protagonist": {
                name: "Ichigo",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            },
            "antagonist": {
                name: "Aizen",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            },
            "waifu": {
                name: "Orihime",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            }
        }
    })
    await anime3.save()
    const anime4 = new AnimeRankingAnimeInfo({
        "name": "Dragon Ball",
        "image": "https://cdn.myanimelist.net/images/anime/6/53491.jpg",
        "characters": {
            "protagonist": {
                name: "Goku",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            },
            "antagonist": {
                name: "Frieza",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            },
            "waifu": {
                name: "Bulma",
                image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            }
        }
    })
    await anime4.save()
    return true
}

