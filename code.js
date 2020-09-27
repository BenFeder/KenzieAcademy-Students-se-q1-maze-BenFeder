// Your Code Here!
const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

createMaze();

function createMaze() {
  // Iterate through each row in map array
  for (rows of map) {
    // make each row a section (div) for the maze
    let mazeRow = document.createElement("div");
    mazeRow.className = "row";
    document.body.append(mazeRow);
    // Turn each cell into a piece of the maze...
    for (let cell = 0; cell < rows.length; cell++) {
      if (rows[cell] == "W") {
        // ...as a wall
        let mazeWall = document.createElement("div");
        mazeWall.className = "wall";
        mazeRow.append(mazeWall);
      } else if (rows[cell] == " ") {
        // ...as pathway for player to move
        let mazePath = document.createElement("div");
        mazePath.className = "path";
        mazeRow.append(mazePath);
      } else if (rows[cell] == "S") {
        // ...as starting position, the player piece
        let playerPiece = document.createElement("div");
        playerPiece.className = "player";
        mazeRow.append(playerPiece);
      } else if (rows[cell] == "F") {
        // ...as finishing spot
        let finishSpot = document.createElement("div");
        finishSpot.className = "finish";
        mazeRow.append(finishSpot);
      }
    }
  }
}

playerPiece.addEventListener("keydown", movePiece);

function movePiece(event) {
  // update position of "S" in map array, so that the player piece div appends to the next cell over (up, down, left, or right)
  if (event.keyCode == 38) {
    // If player hits up arrow key
    for (rows of map) {
      if (map[rows].indexOf("S") >= 0) {
        // If player piece exists in that row
        let indexPlayer = map[rows].indexOf("S"); // get index number of that player piece
        if (map[rows - 1][indexPlayer] != "W") {
          // If next cell up in previous array row isn't a wall
          map[rows].split("").splice(indexPlayer, 1, " ").join("");
          map[rows - 1].split("").splice(indexPlayer, 1, "S").join("");
          createMaze(); // move piece up
        }
      }
    }
  } else if (event.keyCode == 40) {
    // If player hits down arrow key
    for (rows of map) {
      if (map[rows].indexOf("S") >= 0) {
        // If player piece exists in that row
        let indexPlayer = map[rows].indexOf("S"); // get index number of that player piece
        if (map[rows + 1][indexPlayer] != "W") {
          // If next cell down in next array row isn't a wall
          map[rows].split("").splice(indexPlayer, 1, " ").join("");
          map[rows + 1].split("").splice(indexPlayer, 1, "S").join("");
          createMaze(); // move piece down
        }
      }
    }
  } else if (event.keyCode == 37) {
    // If player hits left arrow key
    for (rows of map) {
      if (map[rows].indexOf("S") >= 0) {
        // If player piece exists in that row
        let indexPlayer = map[rows].indexOf("S"); // get index number of that player piece
        if (map[rows][indexPlayer - 1] != "W") {
          // If next cell to the left isn't a wall
          map[rows]
            .split("")
            .splice(indexPlayer - 1, 2, "S", " ")
            .join(""); // move piece left
          createMaze();
        }
      }
    }
  } else if (event.keyCode == 39) {
    // If player hits right arrow key
    for (rows of map) {
      if (map[rows].indexOf("S") >= 0) {
        // If player piece exists in that row
        let indexPlayer = map[rows].indexOf("S"); // get index number of that player piece
        if (
          map[rows][indexPlayer + 1] != "W" && // If next cell to the right isn't a wall
          map[rows][indexPlayer + 1] != "F" // If next cell over ISN'T the "Finish" cell
        ) {
          map[rows].split("").splice(indexPlayer, 2, " ", "S").join("");
          createMaze(); // move piece right
        } else if (
          map[rows][indexPlayer + 1] != "W" && // If next cell to the right isn't a wall
          map[rows][indexPlayer + 1] == "F" // If next cell over is "Finish" cell
        ) {
          map[rows].split("").splice(indexPlayer, 2, " ", "S").join("");
          createMaze();
          // winning condition met, display that the player won by moving player piece onto finish cell
          let displayWin = document.createElement("div");
          displayWin.innerText =
            "Congratulations! You won, and are now crowned king of the Seven Kingdoms.";
          document.body.append(displayWin);
        }
      }
    }
  }
}
