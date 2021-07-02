// blackJack App - freeCodeCamp Tutorial
// July 1, 2021

// ================ Variables =================

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let messageContent = document.getElementById("message-el");
let start = document.getElementById("start-btn");

let player = {
    name: "Brendan",
    chips: 1000000
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;



// ================ Functions =================

function getRandomCard() {
    let randomNumber = Math.floor((Math.random() * 13) + 1);

    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    start.textContent = "good luck";
    sumEl.textContent = "sum: " + sum;
    cardsEl.textContent = "cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "hit?";
} else if (sum === 21) {
    message = "black jack!! congratulations";
        hasBlackJack = true;
} else {
        message = "you lose :(";
        isAlive = false;
    }
    messageContent.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }
}

function newGame() {
    sumEl.textContent = "sum";
    cardsEl.textContent = "cards";
    messageContent.textContent = "good luck";
    start.textContent = "start game";
}