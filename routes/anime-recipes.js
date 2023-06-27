const express = require('express')
const router = express.Router()
const RecipeInfo = require('../data/anime-recips/recipe')

router.get('/get-recipes', async (req, res) => {
    try {
        const recipes = await RecipeInfo.find({})
        res.json(recipes)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

router.post('/test', async (req, res) => {
    const { recipe } = req.body
    const { image, foodName, animeName, Time, description, ingredients, servingAmount } = recipe
    try {
        const Recipe = new RecipeInfo({
            image,
            foodName,
            animeName,
            Time,
            description,
            ingredients,
            servingAmount
        })
        await Recipe.save()
        res.json(Recipe)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

module.exports = router