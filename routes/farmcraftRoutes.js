const express = require('express')
const router = express.Router()
const farmCraftFarmInfo = require('../data/farmcraft/farm-info')
const farmCraftCategoryInfo = require('../data/farmcraft/category-info')
const FarmcraftFarmInfo = require('../data/farmcraft/farm-info')

router.get('/get-categories', async (req, res) => {
    try {
        const categories = await farmCraftCategoryInfo.find({})
        res.json(categories)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

router.get('/get-farms-from/:category', async (req, res) => {
    try {
        const { category } = req.params
        const farms = await farmCraftFarmInfo.find({ category })
        res.json(farms)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

router.post('/create-farm', async (req, res) => {
    try {
        const { image, name, category, description, ingredients, time, videoId } = req.body
        const farm = new FarmcraftFarmInfo({
            image,
            name,
            category,
            description,
            ingredients,
            time,
            videoId
        })
        await farm.save()
        return res.json(farm)
    } catch (err) {
        console.log(err)
        return res.status(400).send('Something went wrong')
    }
})

router.post('/create-category', async (req, res) => {
    try {
        const { name, image } = req.body
        const category = new farmCraftCategoryInfo({
            name,
            image
        })
        await category.save()
        return res.json(category)
    }
    catch (err) {
        console.log(err)
        return res.status(400).send('Something went wrong')
    }
})

module.exports = router