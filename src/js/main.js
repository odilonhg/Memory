let dimension = 150;
let imgStart = 1 + Math.floor(Math.random() * 99);
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

function initGame() {
    const board = document.querySelector("#game-board");
    ids = shuffle(ids);

    ids.forEach((id) => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.value = `https://picsum.photos/id/${id}/${dimension}`;
        card.style.width = `${dimension}px`; card.style.height = `${dimension}px`;
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        board.appendChild(card);
    });
}

initGame();