function Game2048(){

//EVERY TIME THE GAME2048 FUNCTION IS CALLED, IT RESETS THE BOARD AND THE SCORE

  this.board = [
                [null,null,null,null],
                [null,null,null,null],
                [null,null,null,null],
                [null,null,null,null]
                ];

  this.score = 0;
  this.won = false;
  this.lost = false;

  this._generateTile();
  this._generateTile();

}

Game2048.prototype._generateTile = function(){

  var initialValue = Math.random();

    if(initialValue < 0.8){
      initialValue = 2;
    } else {
      initialValue = 4;
    }

  var emptyTile = this._getAvailablePosition();
  this.board[emptyTile.x][emptyTile.y] = initialValue;

};

Game2048.prototype._getAvailablePosition = function(){

  var emptyTiles = [];

    this.board.forEach(function(row, rowIndex){
      // THIS FIRST FOREACH ITERATES OVER EACH ROW. THE NEXT FOREACH ITERATES OVER EACH ELEMENT IN EACH ROW.
      // WHY DO WE NEED ROW INDEX AND COLINDEX?
      row.forEach(function(elem, colIndex){

          if(elem === null){
            emptyTiles.push({x: rowIndex, y: colIndex});
          }
      });
    });

    if(emptyTiles===0){
      return false;
    }

    var randomEmptyTile = Math.floor(Math.random() * emptyTiles.length);
    return emptyTiles[randomEmptyTile];

};

Game2048.prototype._renderBoard = function(){
  this.board.forEach(function(row){
    console.log(row);
    }
  );
};

var game = new Game2048();

game._renderBoard();

// MOVE LEFT

Game2048.prototype.moveLeft = function(){
  var newBoard = [];
  var that = this; // NEED TO UNDERSTAND THIS
  var boardChanged = false;

  this.board.forEach(function(row){
    var newRow = row.filter(function(item){
      return item !== null;
    });
// THIS REMOVES ALL THE EMPTY CELLS, IN EFFECT PUSHING ALL THE CELLS TO THE LEFT

  for(var i =0; i<newRow.length-1; i++) {
    if(newRow[i] === newRow[i+1]){
      newRow[i] += newRow[i+1];
      newRow[i+1] = null;
    }
  }

  var merged = newRow.filter(function(item){
    return item !== null;
  });
// THIS REMOVES ANY EMPTY CELLS THAT HAVE OCCURRED AS A RESULT OF THE MERGE. SO IN EFFECT, THE CELLS HAVE BEEN MOVED AND ADDED.

  while(merged.length < row.length){
    merged.push(null);
  }
  // THIS ADDS THE EMPTY SPACES BACK IN, AT THE END OF THE NUMBERS THAT HAVE MOVED.

  for(var j=0; j<row.length; j++){
    if(merged[j] !== row[j]){
      boardChanged = true;
    }
  }

  newBoard.push(merged);

  });

  this.board = newBoard; // UPDATING THE BOARD WITH THE NEW TILE LAYOUT;
  this._generateTile();
  return boardChanged;
  // SOMEWHERE WE NEED TO ADD A NEW TILE IF THE BOARD HAS CHANGE-D

};

// MOVE RIGHT

Game2048.prototype.moveRight = function(){
  var newBoard = [];
  var that = this; // NEED TO UNDERSTAND THIS
  var boardChanged = false;

  this.board.forEach(function(row){
    var newRow = row.filter(function(item){
      return item !== null;
    });
// THIS REMOVES ALL THE EMPTY CELLS, IN EFFECT PUSHING ALL THE CELLS TO THE LEFT

  for(var i = newRow.length-1; i>0; i--) {
    if(newRow[i] === newRow[i-1]){
      newRow[i] += newRow[i-1];
      newRow[i-1] = null;
    }
  }

  var merged = newRow.filter(function(item){
    return item !== null;
  });
// THIS REMOVES ANY EMPTY CELLS THAT HAVE OCCURRED AS A RESULT OF THE MERGE. SO IN EFFECT, THE CELLS HAVE BEEN MOVED AND ADDED.

  while(merged.length < row.length){
    merged.unshift(null); // ADDING NULL TO THE LHS OF THE ARRAY AS THE CELLS WILL BE PUSHED TO THE RIGHT
  }
  // THIS ADDS THE EMPTY SPACES BACK IN, AT THE END OF THE NUMBERS THAT HAVE MOVED.

  for(var j=0; j<row.length; j++){
    if(merged[j] !== row[j]){
      boardChanged = true;
    }
  }

  newBoard.push(merged);

  });

  this.board = newBoard; // UPDATING THE BOARD WITH THE NEW TILE LAYOUT;
  return boardChanged;
  // SOMEWHERE WE NEED TO ADD A NEW TILE IF THE BOARD HAS CHANGE-D

};


//   MOVE UP AND DOWN

Game2048.prototype._transposeMatrix = function(){
  for(var row = 0; row < this.board.length; row++){
    for(var column = row+1; column < this.board.length; column++){
      var temp = this.board[row][column];
      this.board[row][column] = this.board[column][row];
      this.board[column][row] = temp;
    }
  }
};


// MOVE UP

Game2048.prototype.moveUp = function(){
  this._transposeMatrix();
  var boardChanged = this.moveLeft();
  this._transposeMatrix();
  return boardChanged;
};

// MOVE DOWN

Game2048.prototype.moveDown = function(){
  this._transposeMatrix();
  var boardChanged = this.moveRight();
  this._transposeMatrix();
  return boardChanged;
};





//
