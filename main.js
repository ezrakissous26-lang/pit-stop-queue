const raceService = require('./race-service')
const serverLoad = require('./server-load')



async function displayApp() {
    await serverLoad.writeToJson()
    console.log('Pip Stop Queue - Race Team Management System')
    console.log("Let's check the current queue status on the pit wall.\n")
    await raceService.homePage()
}

displayApp()