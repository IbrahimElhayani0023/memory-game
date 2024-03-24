// ========================== var =================================

const grid = document.querySelector('#grid');
const scoreDisplay = document.querySelector('#score');
const memoryCards = document.querySelectorAll('.memory-card');
let fCard, sCard;
let possibleTest = false;
let lockboard = false;
let score = 0;
// ========================== End var =================================

// show the imeges
memoryCards.forEach(memoryCard => removeFlip(memoryCard));

// game functions systeme
memoryCards.forEach(memoryCard => memoryCard.addEventListener('click', flipCard));

// main function
function flipCard() {
    // user can not choose a card if setTimeout function works
    if (lockboard) return;
    this.classList.add('flip')
    if (!possibleTest) {
        fCard = this;
        return possibleTest = true;
    }
    sCard = this;
    return doubleClick();
}

// if the user do a double click or not
function doubleClick() {
    return fCard === sCard ? sCard = null : isMAtch();
}

// if the first card and the second are deferent
function isMAtch() {
    const testIsMatch = fCard.dataset.fram === sCard.dataset.fram;
    return testIsMatch ? matched() : notMatch();
}
// the tow cards are the same
function matched() {
    score++; // increase the score
    scoreDisplay.innerText = score; //display the score in html page
    fCard.removeEventListener('click', flipCard);
    sCard.removeEventListener('click', flipCard);
    possibleTest = false;
    if (score == 6) alert('you are win');
}

function notMatch() {
    // the user can not choose another card
    lockboard = true
    setTimeout(() => {
        fCard.classList.remove('flip');
        sCard.classList.remove('flip');
        possibleTest = false;
    // user can choose another card again
        lockboard = false;
    }, 600);
}

function removeFlip(card) {
    setTimeout(() => {
        card.classList.remove('flip')
    }, 5000);
}

