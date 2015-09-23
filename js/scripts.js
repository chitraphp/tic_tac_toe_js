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

Space.prototype.mark_by = function(playerMark) {
  return this.playerMark = playerMark;
}

Space.prototype.markedBy = function() {
  return this.playerMark;
}

function numberOfSpaces() {
  var array = [];

  for (var x = 1;x<=3;x++){
    for(var y=1;y<=3;y++)
  { array.push(new Space(x,y));
    }
  }
  return array;
}

function Board(numberOfSpaces) {
  this.numberOfSpaces = numberOfSpaces;
}

  Board.prototype.spaces = function() {
    return this.numberOfSpaces = this.numberOfSpaces.length;
  }
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
