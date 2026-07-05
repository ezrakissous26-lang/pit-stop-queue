const fs = require('fs')

function readFile(callback) {
    return new Promise((resolve, reject) => {
        fs.readFile('./data.json', 'utf-8', (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data))
        })
    })
}

module.exports = {
    readFile
}