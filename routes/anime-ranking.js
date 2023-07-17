const express = require('express')
const router = express.Router()
const AnimeRankingUserInfo = require('../data/anime-ranking/userInfo')
const AnimeRankingEventInfo = require('../data/anime-ranking/eventInfo')
const AnimeRankingAnimeInfo = require('../data/anime-ranking/animeInfo')
const cron = require('node-cron')
cron.schedule('59 23 * * *', generateNewEvent)
// generateNewEvent()
// replaceAllUrls()

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


async function replaceAllUrls() {
    try{
        const animes = await AnimeRankingAnimeInfo.find({})
    animes.forEach(async(a) => {
        let image = a.image
        image = replaceUrl(image)
        if(image === 0) return
        let characters = a.characters
        for(const key in characters) {
            let character = characters[key]
            let characterImage = character.image
            character.image = replaceUrl(characterImage)
            if(character.image === 0) return
        }
        await AnimeRankingAnimeInfo.updateOne({name: a.name}, {image, characters})
    })
    }
    catch(err) {
        console.log(err)
    } 
}

function replaceUrl(url) {
    const fileIdStartIndex = url.indexOf('/file/d/') + 8;
    const fileIdEndIndex = url.indexOf('/view');

    if (fileIdStartIndex === -1 || fileIdEndIndex === -1) return 0;

    const fileId = url.substring(fileIdStartIndex, fileIdEndIndex);
    const directURL = `https://drive.google.com/uc?export=download&id=${fileId}`;
    return directURL;
}


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
            "participants": getParticipants(animes, randomQuestion, randomIndex1, 32),
            "status": "current"
        })
        await newEvent.save()
        console.log('generated next event:', randomQuestion)
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



