import { getRandomThrow, getThrowFromNumber } from './get-random-throw.js';
import { checkResult } from './check-result.js';

const playButton = document.getElementById('play-button');
const tracker = document.getElementById('trackers');
const totalWins = document.getElementById('win-counter');
const totalLosses = document.getElementById('loss-counter');
const totalDraws = document.getElementById('draw-counter');
const results = document.getElementById('results');
const userResult = document.getElementById('user-throw');
const computerResult = document.getElementById('computer-throw');
const winOrLose = document.getElementById('win-or-lose');

// Initialize state
let totalWinsCount = 0;
let totalLossesCount = 0;
let totalDrawsCount = 0;



playButton.addEventListener('click', () => {
    const checkedInput = document.querySelector('input:checked');
    const playerThrow = checkedInput.value;
    const computerThrow = getRandomThrow();
    const result = checkResult(playerThrow, computerThrow);

    userResult.textContent = playerThrow;
    computerResult.textContent = computerThrow;
    winOrLose.textContent = result;

    if (result === 'win') {
        totalWinsCount++;
    } else if (result === 'lose') {
        totalLossesCount++;
    } else if (result === 'draw') {
        totalDrawsCount++;
    }

    tracker.style.display = 'block';
    results.style.display = 'block';
    
    totalWins.textContent = `${totalWinsCount} WINS`;
    totalLosses.textContent = `${totalLossesCount} LOSSES`;
    totalDraws.textContent = `${totalDrawsCount} DRAWS`;
});