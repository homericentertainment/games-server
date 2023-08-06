const AnimeRankingAnimeInfo = require('../data/anime-ranking/animeInfo')
// add()

async function add() {
    const animes = [
        
    ]
    animes.forEach(async(a) => {
        const anime = new AnimeRankingAnimeInfo(a)
        await anime.save()
    })
}