const express = require('express')
const router = express.Router()

const { readTopics } = require('../controllers/topicsController')

router.get('/', (req, res) => {
  res.render()
})

router.get('/topics', async (req, res) => {
  try {
    const topics = await readTopics()
    res.json(topics)
  } catch (e) {
    console.log('Receiving topics error', e.message)
    res.status(400).send(e)
  }
})

module.exports = router
