// Get elements from DOM
const totalWins = document.getElementById('win-counter');
const totalLosses = document.getElementById('loss-counter');
const totalDraws = document.getElementById('draw-counter');

function displayResultTotals(wins, losses, draws) {
// Display counter totals
    totalWins.textContent = `${wins} WINS`;
    totalLosses.textContent = `${losses} LOSSES`;
    totalDraws.textContent = `${draws} DRAWS`;
}

export {
    displayResultTotals
};