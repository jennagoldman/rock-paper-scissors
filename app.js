// Import function modules
import { getRandomThrow } from './get-random-throw.js';
import { checkResult } from './check-result.js';
import { modifyDisplay } from './ui-mods.js';
import { displayResultTotals } from './display-result-totals.js';
import { displayThrowResults } from './display-throw-results.js';

// Get needed elements from the DOM
const playButton = document.getElementById('play-button');

// Initialize state
let totalWinsCount = 0;
let totalLossesCount = 0;
let totalDrawsCount = 0;

// Add event listener to update state and modify DOM
playButton.addEventListener('click', () => {
    const checkedInput = document.querySelector('input:checked');
    const playerThrow = checkedInput.value;
    
    // set computer value using getRandomThrow
    const computerThrow = getRandomThrow();
    
    // compare user and computer value to determine winner
    const result = checkResult(playerThrow, computerThrow);

    // Modify state
    if (result === 'win') {
        totalWinsCount++;
    } else if (result === 'lose') {
        totalLossesCount++;
    } else {
        totalDrawsCount++;
    }

    modifyDisplay();
    displayThrowResults(playerThrow, computerThrow, result);
    displayResultTotals(totalWinsCount, totalLossesCount, totalDrawsCount);
});