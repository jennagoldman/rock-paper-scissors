// Import function modules
import { getRandomThrow } from './get-random-throw.js';
import { checkResult } from './check-result.js';
import { modifyDisplay } from './ui-mods.js';

// Get needed elements from the DOM
const playButton = document.getElementById('play-button');
const totalWins = document.getElementById('win-counter');
const totalLosses = document.getElementById('loss-counter');
const totalDraws = document.getElementById('draw-counter');
const userResult = document.getElementById('user-throw');
const computerResult = document.getElementById('computer-throw');
const winOrLose = document.getElementById('win-or-lose');

// Initialize state
let totalWinsCount = 0;
let totalLossesCount = 0;
let totalDrawsCount = 0;

// Add event listener to update state and modify DOM
playButton.addEventListener('click', () => {
    const checkedInput = document.querySelector('input:checked');
    const playerThrow = checkedInput.value;
    const computerThrow = getRandomThrow();
    const result = checkResult(playerThrow, computerThrow);

    // Modify state
    if (result === 'win') {
        totalWinsCount++;
    } else if (result === 'lose') {
        totalLossesCount++;
    } else if (result === 'draw') {
        totalDrawsCount++;
    }

    // Set results text content based on throw comination
    userResult.textContent = playerThrow;
    computerResult.textContent = computerThrow;
    winOrLose.textContent = result;

    // Display counter totals
    totalWins.textContent = `${totalWinsCount} WINS`;
    totalLosses.textContent = `${totalLossesCount} LOSSES`;
    totalDraws.textContent = `${totalDrawsCount} DRAWS`;

    modifyDisplay();
});