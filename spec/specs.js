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
    expect(testSpace.markedBy()).to.equal(testPlayer);
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
});
