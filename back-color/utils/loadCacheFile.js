const fs = require('fs')
const cacheFile = './cache/cache.json'

exports.loadCacheFile = () => {
    try {
        const data = fs.readFileSync(cacheFile, { encoding: 'utf8', flag: 'r' })
        return JSON.parse(data)
    }
    catch (err) {
        return []
    }
}

