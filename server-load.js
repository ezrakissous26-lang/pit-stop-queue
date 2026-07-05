const fs = require('fs')

async function getData() {
    try {
        const response = await fetch('https://server-for-test-week-13.onrender.com/api/race')
        const result = await response.json()
        return result
    } catch (err) {
        console.error(err.message)
    }
}

async function writeToJson() {
    try {
        const response = await fetch('https://server-for-test-week-13.onrender.com/api/race')
        let result = await getData()
        await fs.writeFile('./data.json', JSON.stringify(result, null, 2), (err) => {
            if (err) throw err;
        })
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = {
    writeToJson
}