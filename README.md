# Quick Maffs!

Quick Maffs is a web-based game that challenges players to reach a target number between 1-55 using numbers displayed on the screen. The player can attempt to get to the target number by dragging and dropping the numbers onto the "Drop Zone". The goal is to reach the target number without going over, and without using the same number more than once.

## Play Online

You can play the game online at [Quick Maffs on Heroku] No installation needed.

## Local Installation

If you prefer to run the game locally:

1. First, clone this repository:
- cd Alchemy_Name
- npm install
3. Make sure to create a `.env` file in the root directory and set the following environment variables:
- `DB_USERNAME`: Your database username.
- `DB_PASSWORD`: Your database password.
- `DB_NAME`: Your database name.
4. Run the server: npm start
5. Open a web browser and visit `http://localhost:3001`.

## Gameplay

1. Click the "Start Game" button to begin the game.
2. A set of numbers will appear on the screen. Drag the numbers and drop them onto the "Drop Zone" to add them to your total.
3. Try to reach the target number displayed on the screen without going over and without using the same number more than once.
4. If you go over the target number, a message will appear indicating that you have lost.
5. Click the "Reset Game" button to start over.

## Technologies Used

- Node.js
- Express
- Sequelize
- Handlebars
- Express-Session
- Connect-Session-Sequelize

## License

[MIT License](LICENSE)

