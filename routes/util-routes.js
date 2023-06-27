const express = require('express')
const router = express.Router()

router.get('/get-time', async (req, res) => {
    try {
        var dt = new Date().toUTCString()
        res.json(dt)
    } catch (err) {
        res.status(400).send('Something went wrong')
    }
})

module.exports = router
