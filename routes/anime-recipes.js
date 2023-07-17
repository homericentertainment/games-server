const express = require('express')
const router = express.Router()
const RecipeInfo = require('../data/anime-recips/recipe-info')

router.get('/get-recipes', async (req, res) => {
    try {
        const recipes = await RecipeInfo.find({})
        res.json(recipes)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

router.get('/get-recipes-from/:animeName', async (req, res) => {
    try {
        const { animeName } = req.params
        const recipes = await RecipeInfo.find({animeName})
        res.json(recipes)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

// paz2()

// async function paz(){
//     try {
//         const Recipe = new RecipeInfo({
//             image:'https://prod.cdn-medias.theafricareport.com/medias/2022/11/RTX6I3WO-732x419.jpg',
//             foodName:'nioki',
//             animeName:'naruto',
//             Time:'1 hour',
//             description:'very tasty sgfdsfkjgbnsdfujbsdfujhguby difuhgiusdbgiubsd eriurghsdfibgisufdbg',
//             ingredients:[
//                 '2 cup of flour',
//                 '4 cup of water',
//                 '1 cup of salt',
//                 '1 cup of sugar',
//             ],
//             steps:[
//                 'mix the flour with the water',
//                 'add the salt and the sugar',
//                 'cook it for 30 minutes',
//                 'eat it'
//             ],
//             servingAmount:4
//         })
//         await Recipe.save()
//         console.log('saved')
//     } catch (err) {
//         console.log(err)
//         console.log('error!!!!!!')
//     }

// }

// async function paz2(){
//     try {
//         console.log('start')
//         const Recipe = new RecipeInfo({
//             image:'https://prod.cdn-medias.theafricareport.com/medias/2022/11/RTX6I3WO-732x419.jpg',
//             foodName:'Ramen',
//             animeName:'naruto',
//             Time:'1 hour',
//             description:'very tasty Ramen sgfdsfkjgbnsdfujbsdfujhguby difuhgiusdbgiubsd eriurghsdfibgisufdbg',
//             ingredients:[
//                 '1 cup of flour',
//                 '2 cup of water',
//                 '0.5 cup of salt',
//                 '2 cup of sugar',
//             ],
//             steps:[
//                 'mix the flour with the water',
//                 'add only salt and wait for 10 minutes',
//                 'cook it for 10 minutes',
//                 'eat it'
//             ],
//             servingAmount:2
//         })
//         await Recipe.save()
//         console.log('saved')
//     } catch (err) {
//         console.log(err)
//         console.log('error!!!!!!')
//     }
// }

module.exports = router