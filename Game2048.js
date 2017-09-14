// // ---------------------
// function Class () {
// }

function Game2048() {
  this.board = [];
  this.score  = 0;
}






// Class.prototype._privateMethod = function () {
// };

// Class.prototype.publicMethod = function () {
// };


// // ---------------------
// function Game2048() {
//   this.board = [];
//   this.score  = 0;
// }


// // ---------------------
// function Game2048 () {
//   this.board = [
//     [null,null,null,null],
//     [null,null,null,null],
//     [null,null,null,null],
//     [null,null,null,null]
//   ];
	
//   this.score  = 0;
// }



// // ---------------------
// function Game2048 () {
//   this.board = [
//     [null,null,null,null],
//     [null,null,null,null],
//     [null,null,null,null],
//     [null,null,null,null]
//   ];
	
//   this.score = 0;
//   this.won   = false;
//   this.lost  = false;
// }






// // ---------------------
// Game2048.prototype._generateTile = function () {
//   var initialValue = (Math.random() < 0.8) ? 2 : 4;
// };






// // ---------------------
// Game2048.prototype._getAvailablePosition = function () {
//   var emptyTiles = [];

//   this.board.forEach(function(row, rowIndex){
//     row.forEach(function(elem, colIndex){
//       if (!elem) emptyTiles.push({ x: rowIndex, y: colIndex });
//     });
//   });

//   if (emptyTiles.length === 0)
//     return false;

//   var randomPosition = Math.floor(Math.random() * emptyTiles.length);
//   return emptyTiles[randomPosition];
// };



// // ---------------------
// Game2048.prototype._generateTile = function () {
//   var initialValue = (Math.random() < 0.8) ? 2 : 4;
//   var emptyTile = this._getAvailablePosition();

//   if (emptyTile) {
//     this.board[emptyTile.x][emptyTile.y] = initialValue;
//   }
// };









// // ---------------------
// function Game2048 () {
//   // ...
  
//   this._generateTile();
//   this._generateTile();
// }


// // ---------------------
// Game2048.prototype._renderBoard = function () {
//   this.board.forEach(function(row){ console.log(row); });
// };



// // ---------------------
// Game2048.prototype.moveLeft = function () {
//   var newBoard = [];
//   var that = this;
//   var boardChanged = false;

//   this.board.forEach (function (row) {
//     var newRow = row.filter(function (i) {
//       return i !== null;
//     });

//     for(i = 0; i < newRow.length - 1; i++) {
//       if (newRow[i+1] === newRow[i]) {
//         newRow[i]   = newRow[i] * 2;
//         newRow[i+1] = null;
//       }
//     }

//     var merged = newRow.filter(function (i) {
//       return i !== null;
//     });
		
//     while(merged.length < 4) {
//       merged.push(null);
//     }
    
//     if (newRow.length !== row.length)
//       boardChanged = true;

//     newBoard.push(merged);
//   });

//   this.board = newBoard;
//   return boardChanged;
// };



// // ---------------------
// for (i=newRow.length - 1; i>0; i--) {
//   if (newRow[i-1] === newRow[i]) {
//     newRow[i]   = newRow[i] * 2;
//     newRow[i-1] = null;
//     that._updateScore(newRow[i]);
//   }
      
//   if (newRow.length !== row.length) boardChanged = true;
// }

// var merged = newRow.filter(function (i) {
//   return i !== null;
// });

// while(merged.length < 4) {
//   merged.unshift(null);
// }

// newBoard.push(merged);




// // ---------------------
// Game2048.prototype._transposeMatrix = function () {
//   for (var row = 0; row < this.board.length; row++) {
//     for (var column = row+1; column < this.board.length; column++) {
//       var temp = this.board[row][column];
//       this.board[row][column] = this.board[column][row];
//       this.board[column][row] = temp;
//     }
//   }
// };






// // ---------------------






// // ---------------------

