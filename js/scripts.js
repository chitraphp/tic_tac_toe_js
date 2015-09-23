function Player(playerMark) {
  this.playerMark = playerMark;
}

Player.prototype.mark = function() {
  return this.playerMark;
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
