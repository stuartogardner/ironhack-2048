var game;

$(document).ready(function() {

  game = new Game2048();

  //   RENDER THE tiles
  renderTiles();

  function renderTiles() {
    game.board.forEach(function(row, rowIndex){
        row.forEach(function(cell, cellIndex){
            if(cell !== null){
              var newTile = '<div class="' + 'tile val-' + cell + ' ' + 'tile-position-' + rowIndex + '-' + cellIndex + '">' + cell + '</div>';
              $('#tile-container').append(newTile);
            }
        });
    });
  }

  function resetTiles () {
    var tilesContainer = document.getElementById("tile-container");
    var tiles          = tilesContainer.getElementsByClassName("tile");

    Array.prototype.slice.call(tiles).forEach(function (tile) {
      tilesContainer.removeChild(tile);
    });
  }

function moveListeners(event){
  var keys = [37, 38, 39, 40];

  if(keys.indexOf(event.keyCode)<0)
    return;

    switch (event.keyCode) {
      case 37:
        game.move("left");
        break;
      case 38:
        game.move("up");
        break;
      case 39:
        game.move("right");
        break;
      case 40:
        game.move("down");
        break;
  }
  resetTiles();
  renderTiles();
}

$(document).keydown(moveListeners);









});
