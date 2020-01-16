function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * 3);  
    return getThrowFromNumber(randomNumber);
}

function getThrowFromNumber(number) {
    if (number === 0) {
        return 'rock';
    } else if (number === 1) {
        return 'paper';
    } else if (number === 2) {
        return 'scissors';
    }
}

export {
    getRandomThrow,
    getThrowFromNumber
};