require('dotenv').config()
const express = require('express')
const cors = require('cors')
const saveCacheFile = require('./utils/saveCacheFile')
const loadCacheFile = require('./utils/loadCacheFile')
const getColor = require('./utils/getColor')
const app = express()
const port = 3001
app.use(cors())

let cache = null

app.get('/', (req, res) => {
    cache = loadCacheFile.loadCacheFile()
    cache.push({ color: getColor.getColor(), id: cache.length + 1 })
    res.json(cache)
    saveCacheFile.saveCacheFile(cache)
})

app.listen(port, () => {
    console.log(`Running app on port ${port}`)
})