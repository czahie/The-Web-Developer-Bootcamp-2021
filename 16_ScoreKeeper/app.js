const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const select = document.querySelector("#playto");
let p1Score = 0;
let p2Score = 0;
let winScore = parseInt(document.querySelector("#playto").value);
let isGameOver = false;

p1Button.addEventListener("click", () => {
    updateScore(p1, p2);
});

p2Button.addEventListener("click", () => {
    updateScore(p2, p1);
});

resetButton.addEventListener("click", reset);

select.addEventListener("change", () => {
    winScore = parseInt(document.querySelector("#playto").value);
    reset();
});

function reset() {
    p1.score = 0;
    p2.score = 0;
    isGameOver = false;
    p1.display.innerText = 0;
    p2.display.innerText = 0;
    p1.display.classList.remove("has-text-danger", "has-text-success");
    p2.display.classList.remove("has-text-danger", "has-text-success");
    p1.button.disabled = false;
    p2.button.disabled = false;
}

function updateScore(player, opponent) {
    if (isGameOver) {
        return;
    }
    player.score++;
    player.display.innerText = player.score;
    if (player.score == winScore) {
        isGameOver = true;
        player.display.classList.add("has-text-success");
        opponent.display.classList.add("has-text-danger");
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
}
