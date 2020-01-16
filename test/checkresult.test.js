// IMPORT MODULES under test here:
import { checkResult } from '../check-result.js';
const test = QUnit.test;

test('if player and computer throw rock, result is draw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const
    const rockDraw = checkResult(player, computer);
    assert.equal(rockDraw, expected);
});

test('if player and computer throw rock, result is draw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'paper';
    const expected = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const
    const paperDraw = checkResult(player, computer);
    assert.equal(paperDraw, expected);
});

test('if player and computer throw scissors, result is draw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'draw';

    //Act 
    // Call the function you're testing and set the result to a const
    const scissorsDraw = checkResult(player, computer);
    assert.equal(scissorsDraw, expected);
});

test('if player throws rock and computer throws paper, result is lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper';
    const expected = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const
    const rockPaperLose = checkResult(player, computer);
    assert.equal(rockPaperLose, expected);
});

test('if player throws rock and computer throws scissors, result is win', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'win';

    //Act 
    // Call the function you're testing and set the result to a const
    const rockScissorsWin = checkResult(player, computer);
    assert.equal(rockScissorsWin, expected);
});

test('if player throws paper and computer throws rock, result is win', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'rock';
    const expected = 'win';

    //Act 
    // Call the function you're testing and set the result to a const
    const paperRockWin = checkResult(player, computer);
    assert.equal(paperRockWin, expected);
});

test('if player throws paper and computer throws scissors, result is lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const
    const paperScissorsLose = checkResult(player, computer);
    assert.equal(paperScissorsLose, expected);
});

test('if player throws scissors and computer throws rock, result is lose', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'rock';
    const expected = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const
    const scissorsRockLose = checkResult(player, computer);
    assert.equal(scissorsRockLose, expected);
});

test('if player throws scissors and computer throws paper, result is win', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'win';

    //Act 
    // Call the function you're testing and set the result to a const
    const scissorsPaperWin = checkResult(player, computer);
    assert.equal(scissorsPaperWin, expected);
});