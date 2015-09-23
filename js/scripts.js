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

// function numberOfSpaces() {
//   var array = [];
//
//   for (var x = 1;x<=3;x++){
//     for(var y=1;y<=3;y++)
//   { array.push(new Space(x,y));
//     }
//   }
//   return array;
// }

function Board() {
  this.array = [];

  for (var x = 0;x<=2;x++){
    var row = [];
    for(var y=0;y<=2;y++)
  { row.push(new Space(x,y));
    }
  this.array.push(row);
  }
}

Board.prototype.spaces = function() {
  return this.numberOfSpaces = this.array.length;
}

Board.prototype.find = function(xcoordinate, ycoordinate) {
  return this.array[xcoordinate] [ycoordinate];
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
