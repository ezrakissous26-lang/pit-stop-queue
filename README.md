README.md
# Pit Stop Queue
## Description:

The application aims to provide the pit crew engineer with an overview of each vehicle's status, the ability to search for a vehicle by its number, and the option to send a radio message to the next race driver.

## Execution instructions:

Run the main file using: `node main.js`

## App features:

- Race name.
- Current lap.
- Total number of cars.
- Number of cars that have completed their pit stop during the current lap.
- Vehicles waiting.
- Next vehicle for the pit stop.
- Send radio message option.
- Search for a vehicle by number.

## File architecture:

### main.js

- `main.js` is the file to be executed; it handles the display and calls the various functions used by the application.

### server-load.js

- `server-load.js` fetches data from this link: [Race API](https://server-for-test-week-13.onrender.com/api/race) and saves it to a local `data.json` file.

### race-service.js

- `race-service.js` handles the technical logic that enables the application's various features.

### data.json

- `data.json` is the file that stores our local database, upon which the functions operate.