function checkResult(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if ((player === 'rock' && computer === 'scissors') || 
    (player === 'paper' && computer === 'rock') || 
    (player === 'scissors' && computer === 'paper')) {
        return 'win';
    } else {
        return 'lose';
    }
}

export {
    checkResult
};