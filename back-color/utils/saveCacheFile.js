const fs = require('fs')
const cacheFile = './cache/cache.json'

const cleanCache = process.env.CLEAN_CACHE

if (cleanCache && ['yes', 'true'].includes(cleanCache.toLowerCase())) {
    fs.writeFile(cacheFile, '[]', (err) => { })
}

exports.saveCacheFile = (cache) => {
    fs.writeFile(cacheFile, JSON.stringify(cache), (err) => { })
}

