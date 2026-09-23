let dimension = 150;
let imgStart = 1 + Math.floor(Math.random() * 99);
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;
const uniqueIds = new Set();

while (uniqueIds.size < 8) {
    uniqueIds.add(Math.floor(Math.random() * 306));
}

let ids = [...uniqueIds, ...uniqueIds];

/**
 * Shuffle a list of numbers
 * @param {Array<Number>} array - List of numbers
 * @returns {Array<Number>} - Shuffled list of numbers
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


/**
 * Initialize the game
 */
function initGame() {
    const board = document.querySelector("#game-board");
    ids = shuffle(ids);

    ids.forEach((id) => {
        const card = document.createElement("div");
        card.classList = "card";
        card.dataset.value = `https://picsum.photos/id/${id}/${dimension}`;
        card.style.width = `${dimension}px`; card.style.height = `${dimension}px`;
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.addEventListener("click", () => handleCardClick(card));
        board.appendChild(card);
    });
}

/**
 * 
 * @param {HTMLDivElement} card - Card clicked
 */
function handleCardClick(card) {
    if (card.classList.contains("flipped") || card.classList.contains("matched")) return;

    card.classList.add("flipped");

    if (!firstCard) {
        firstCard = card;
        card.innerHTML = `<img src="${card.dataset.value}" alt="Image ${card.dataset.value}" />`
    } else {
        secondCard = card;
        card.innerHTML = `<img src="${card.dataset.value}" alt="Image ${card.dataset.value}" />`
        lockBoard = true;
        moves++;
        checkMatch();
    }
}

/**
 * Check if the two cards match
 */
function checkMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedCount++;
        resetBoard();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            firstCard.innerHTML = "";
            secondCard.classList.remove("flipped");
            secondCard.innerHTML = "";
            resetBoard();
        }, 800);
    }
}

/**
 * Reset the board
 */
function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

initGame();