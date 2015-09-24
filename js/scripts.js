function Player(playerMark) {
  this.playerMark = playerMark;
}

Player.prototype.mark = function() {
  return this.playerMark;
}

function Space(xcoordinate, ycoordinate) {
  this.xcoordinate = xcoordinate;
  this.ycoordinate = ycoordinate;
}

Space.prototype.mark_by = function(player) {
  return this.player = player;
}

Space.prototype.markedBy = function() {
  return this.player;
}



function Board() {
  this.board = [];
  for (var x=0;x<3;x++) {
    this.board[x] = [];
    for (var y=0;y<3;y++) {
      this.board[x].push(new Space(x,y));
    }
  }
}



Board.prototype.spaces = function() {
  return this.numberOfSpaces = this.board.length;
}

Board.prototype.find = function(xcoordinate, ycoordinate) {
  return this.board[xcoordinate] [ycoordinate];
}

// function Game(player1, player2, board) {
//   this.player1 = player1;
//   this.player2 = player2;
//   this.board = board;
// }

function winner() {

}


// Game.prototype.winner = function() {
//   if((newBoard.find(0,0).mark_by === newBoard.find(0,1).mark_by === newBoard.find(0,2).mark_by) || (newBoard.find(1,0).mark_by === newBoard.find(1,1).mark_by === newBoard.find(1,2).mark_by) || (newBoard.find(2,0).mark_by === newBoard.find(2,1).mark_by === newBoard.find(2,2).mark_by) || (newBoard.find(0,0).mark_by === newBoard.find(0,1).mark_by === newBoard.find(0,2).mark_by))
//   return playerMark;
//
// }
//
// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });
