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

// Iterate through each row in array
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

playerPiece.addEventListener("keydown", movePiece);

function movePiece(event) {
  if (event.keyCode == 38 || event.keyCode == 40) {
    if (event.keyCode == 38) {
      mazePath.append(playerPiece); // move piece up
    } else if (event.keyCode == 40) {
      mazePath.append(playerPiece); // move piece down
    }
  } else if (event.keyCode == 37 || event.keyCode == 39) {
    if (event.keyCode == 37) {
      mazePath.append(playerPiece); // move piece left
    } else if (event.keyCode == 39) {
      mazePath.append(playerPiece); // move piece right
    }
  }
}
