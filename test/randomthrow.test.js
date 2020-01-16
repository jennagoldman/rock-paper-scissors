// IMPORT MODULES under test here:
import { getThrowFromNumber } from '../get-random-throw.js';
const test = QUnit.test;

test('random number evaluating to 0 should return rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerThrow = 0;
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeRock = getThrowFromNumber(computerThrow);
    assert.equal(shouldBeRock, expected);
});

test('random number evaluating to 1 should return paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerThrow = 1;
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeRock = getThrowFromNumber(computerThrow);
    assert.equal(shouldBeRock, expected);
});

test('random number evaluating to 2 should return scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const computerThrow = 2;
    const expected = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeRock = getThrowFromNumber(computerThrow);
    assert.equal(shouldBeRock, expected);
});