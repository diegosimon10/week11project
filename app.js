// Initialize game variables
const currentPlayer = "player1";
const player1Selections = [];
const player2Selections = [];
const winningCombinations = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7]
];

const cells = document.querySelectorAll(".cell");
for (var i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", cellClicked);
}


const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", resetGame);


function cellClicked() {
	if (currentPlayer === "player1") {
		this.classList.add("player1");
		player1Selections.push(parseInt(this.id.slice(5)));
  }
}

    
    
    