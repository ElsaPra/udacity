/*
 * Create a list that holds all of your cards
 */

let icons = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"]


const Container = document.querySelector(".deck");

let openCards = [];
let matchedCard = [];

// Rating
const stars = document.querySelector('.stars').childNodes;
const starsForRate = document.querySelector('.stars');


const timer = document.querySelector(".timer");

// Modal
const modal = document.querySelector('.modal');
const timeModal = document.querySelector('.time-modal');
const ratingModal = document.querySelector('.rating-modal');
const movesModal = document.querySelector('.moves-modal');
const buttonmodal = document.querySelector('.button-modal');

//Starting the Game
/******************/
function startGame() {
    // icons = shuffle(icons);
    for (let i = 0; i < icons.length; i++) {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `<i class="${icons[i]}"></i>`;
        Container.appendChild(card);

        //Add click event to each card
        click(card);
    }
}

// Click Event Creation for Card
/*******************************/
var cardClicked = 0;

function click(card) {
    // card click event creation
    card.addEventListener("click", function () {
        cardClicked += 1;
        // if (openCards.length === 0 && matchedCard.length === 0) {
        if (cardClicked === 1) {
            const startTime = 0,
                display = document.querySelector('#time');
            startTimer(startTime, display);
        }

        const currentCard = this;
        const prevCard = openCards[0];

        //when one existing card is already opened

        if (openCards.length === 1) {

            card.classList.add("open", "show", "disable");
            openCards.push(this);

            //compare when 2 cards are opened
            if (matchedCard.length > 0) {
                for (let element of matchedCard) {
                    if (element.innerHTML !== this.innerHTML) {
                        compare(currentCard, prevCard);
                        break;
                    }
                }
            } else {
                compare(currentCard, prevCard);
            }

        } else {
            //No open cards yet
            currentCard.classList.add("open", "show", "disable");
            openCards.push(this);
        }

    });
}

// Compare Two cards
/**************** */
function compare(currentCard, prevCard) {
    if (currentCard.innerHTML === prevCard.innerHTML) {

        //Matched
        currentCard.classList.add("Matched");
        prevCard.classList.add("Matched");

        matchedCard.push(currentCard, prevCard);

        openCards = [];
        addmove();
        //Check whether Game is OVER!
        isOver();
    } else {

        setTimeout(function () {
            currentCard.classList.remove("open", "show", "disable");
            prevCard.classList.remove("open", "show", "disable");
            openCards = [];
            addmove();
        }, 100);
    }
    // addmove();
    // ratings();

}

// Check wethear the game is over
/****************************** */
function isOver() {
    if (matchedCard.length === icons.length) {
        setTimeout(function () {
            //  alert("Game Over!!!");
            finished();
        }, 103);
    }
}

// Add Move
/******* */
const movesContainer = document.querySelector(".moves");
let moves = 0;
movesContainer.innerHTML = 0;

function addmove() {
    moves++;
    movesContainer.innerHTML = moves;
    ratings();
}

// Set the ratings after every move
/******************************** */
const starsContainer = document.querySelector(".stars");
ratings();

function ratings() {
    if (10 <= moves && moves <= 15) {
        starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
        // isOver();

    } else if (moves > 15) {
        starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>`;
        // setTimeout(function(){
        //     alert("Game Over !!! You used more than 10 moves :(");
        // }, 103);
        // isOver();
    } else {
        starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
        // isOver();
    }
}

// Initialise the game for the 1st times
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
startGame();

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// window.setTimeout(function(){
//     alert("You exceeded the time... Game Over !!!");
// }, 62*1000);
let interval;

// Start timer
/*********** */
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;

    interval = setInterval(function () {
        // if (removeTimer === false) {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (++timer < 0) {
            timer = duration;
        }
        // }
    }, 1000);
}

// window.onload = function () {
//     var fiveMinutes = 60 * 1,
//         display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };

//Restart Button
/************* */

function resetGame() {

    //Delete All Cards
    Container.innerHTML = "";
    // to clear the old board, create a new shuffled  cards board 

    //  icons = shuffle(icons);
    startGame();

    //Reset variables
    matchedCard = [];
    moves = 0;
    movesContainer.innerHTML = moves;
    starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>
                                <li><i class="fa fa-star"></i></li>`;
    const timeContainer = document.querySelector("#time");
    timeContainer.innerHTML = '00:00';

    clearInterval(interval);
    cardClicked = 0;

}
const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function () {

    resetGame();

});

function finished() {

    timeModal.innerText = timer.innerText;
    // starsForRate.innerHTML.style.stars = 'display: inline-block';
    ratingModal.innerHTML = starsForRate.innerHTML;
    // movesContainer.innerHTML.style = 'display: inline-block;';
    movesModal.innerHTML = movesContainer.innerHTML;

    //stop the timer and show the modal
    clearInterval(interval);
    modal.style.display = 'block';
}

buttonmodal.addEventListener('click', function () {
    // to close the modal and restart the game
    modal.style.display = 'none';
    resetGame();
})