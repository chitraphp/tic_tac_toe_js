describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark()).to.equal("X");
   });
});

describe('Space', function() {
    it("returns the player's mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.xcoordinate).to.equal(1);
   });

   it("returns the player's mark", function() {
     var testSpace = new Space(1,2);
     expect(testSpace.ycoordinate).to.equal(2);
  });

  it("lets a player mark a space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1,2);
    testSpace.mark_by(testPlayer);
    //var spacePlayer = test
    expect(testSpace.player.mark()).to.equal(testPlayer.mark());
 });
});

describe('Board', function() {
  it("creates 3 rows when it is initialized", function() {
    var newBoard = new Board();
    expect(newBoard.spaces()).to.equal(3);
   });

   it("finds the space by the coordinates", function() {
     var newBoard = new Board();
     var newSpace = new Space(1,2);
     expect(newBoard.find(1,2).xcoordinate).to.equal(newSpace.xcoordinate);
     expect(newBoard.find(1,2).ycoordinate).to.equal(newSpace.ycoordinate);

    });

    it("finds the space by the coordinates", function() {
      var newBoard = new Board();
      var testPlayer = new Player("X");
      var space = newBoard.find(1,2);
      space.mark_by(testPlayer);
      //var player= space.mark_by(testPlayer);
      //expect(player.mark()).to.equal("X");
      expect(space.player).to.equal(testPlayer);
      expect()
     });
});
// describe('Game', function() {
//   it("creates two players", function() {
//     var testPlayer1 = new Player("X");
//     var testPlayer2 = new Player("Y");
//     var newBoard = new Board();
//     var newGame = new Game(testPlayer1, testPlayer2, newBoard);
//     expect(newGame.player1.mark()).to.equal("X");
//     expect(newGame.player2.mark()).to.equal("Y");
//     expect(newGame.board.spaces()).to.equal(3);
//   });
//});

//});
