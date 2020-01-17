function checkResult(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if ((player === 'rock' && computer === 'paper') || 
    (player === 'paper' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'rock')) {
        return 'lose';
    } else if ((player === 'rock' && computer === 'scissors') || 
    (player === 'paper' && computer === 'rock') || 
    (player === 'scissors' && computer === 'paper')) {
        return 'win';
    }
}

export {
    checkResult
};