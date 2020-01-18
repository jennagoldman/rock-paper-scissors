// Get needed elements from DOM
const userResult = document.getElementById('user-throw');
const computerResult = document.getElementById('computer-throw');
const winOrLose = document.getElementById('win-or-lose');

function displayThrowResults(player, computer, resultOfGame) {
// Set results text content based on throw comination
    userResult.textContent = player;
    computerResult.textContent = computer;
    winOrLose.textContent = resultOfGame;

}


export {
    displayThrowResults
};