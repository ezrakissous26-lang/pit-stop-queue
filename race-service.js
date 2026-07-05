const { count } = require('node:console')
const fileService = require('./file-service.js')

async function homePage() {
    try {
        console.log('Loading queue data...\n')
        const result = await fileService.readFile()
        console.log('========== PIT STOP QUEUE ==========')
        console.log('Race :', result.raceName)
        console.log('Lap :', result.currentLap, '/', result.totalLaps)
        const totalCars = await countTotalCars()
        console.log('Total cars in race :', totalCars)
        const pipDone = await countDonePip()
        console.log('Pit stops completed :', pipDone, '\n')
        const listWaiting = await displayCarWaiting()
        console.log('Cars waiting for pit stop :', listWaiting, '\n')
        const nextPip = listWaiting[0]
        console.log('Next car to enter the pit :\n>>', nextPip)
        console.log('=====================================')
        console.log('')
        await radioMessage(44)
        console.log('--- Search for a car by number ---')
        await searchByNumber(44)
        await searchByNumber(99)
        console.log('')
        console.log('Process completed successfully. The pit wall is up to date.')


    } catch (err) {
        console.error(err.message)
    }
}

async function countTotalCars() {
    try {
        const result = await fileService.readFile()
        const totalCars = result.cars
        return totalCars.length
    } catch (err) {
        console.error(err.message)
    }
}

async function countDonePip() {
    try {
        const result = await fileService.readFile()
        let pipDone = 0
        for (const item of result.cars) {
            if (item.status == 'done') {
                pipDone += 1
            }
        }
        return pipDone
    } catch (err) {
        console.error(err.message)
    }
}

async function displayCarWaiting() {
    try {
        const result = await fileService.readFile()
        let listWaiting = []
        for (const item of result.cars) {
            if (item.status == 'waiting') {
                listWaiting.push('Car #' + item.carNumber + ' | Driver: ' + item.driverName)
            }
        }
        return listWaiting
    } catch (err) {
        console.error(err.message)
    }
}

async function radioMessage(idCar) {
    try {
        const result = await fileService.readFile()
        for (const item of result.cars) {
            if (item.carNumber == idCar) {
                console.log(`Radio message to car #${item.numberCar}: "Box box box, ${item.raceName}, pit this lap!"`)
            }
        }
    } catch (err) {
        console.error(err.message)
    }
}

async function searchByNumber(idCar) {
    try {
        const result = await fileService.readFile()
        const res = result.cars
        // const numberCar = res.find(item => item.carNumber == idCar)
        for (const item of res) {
            if (item.carNumber == idCar) {
            console.log(`Found car #${item.carNumber} | Driver: ${item.driverName} | Status: ${item.status}`)
            break;
            return 0;
        }
        console.log(`Error: No car found with number #${idCar} in the current race.`)
    }

        // for (const item of result.cars) {
        //     listCarNumber.push(item.carNumber)
        // }
        
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = {
    homePage
}

// async function homePage() {
//     try {
        
//     } catch (err) {
//         console.error(err.message)
//     }
// }