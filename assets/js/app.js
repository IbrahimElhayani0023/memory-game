const score = document.querySelector('#score');
const cards = document.querySelectorAll('.memory-card');
let fChoice, sChoice, displayScore = 0;
let hasFlippedCard = false, lockBoard = false;
// ================ End vars ======================//
function flipCard() {
    if (lockBoard) return;
    if (this === fChoice) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        fChoice = this;
        return;
    }
    // second click
    sChoice = this;
    isMatch();
}

cards.forEach(card => card.addEventListener('click', flipCard))




function isMatch() {
    let matchCards = fChoice.dataset.access === sChoice.dataset.access;
    matchCards ? matchChoice() : inflipCard()
}

function matchChoice() {
    displayScore++;
    score.innerText = displayScore;
    fChoice.removeEventListener('click', flipCard);
    sChoice.removeEventListener('click', flipCard);
    resetboard();
}


function inflipCard() {
    lockBoard = true;
    setTimeout(() => {
        fChoice.classList.remove('flip');
        sChoice.classList.remove('flip');
        resetboard();

    }, 1000);
}
function resetboard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [fChoice, sChoice] = [null, null];
}