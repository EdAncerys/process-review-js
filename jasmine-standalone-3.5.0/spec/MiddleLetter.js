describe('MiddleLetter', function () {
  var player;

  beforeEach(function () {
    letter = new MiddleLetter();
  });

  it('should be able to play a Song', function () {
    player.play(player);
    expect(player.currentlyPlayingSong).toEqual(player);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(player);
  });

  describe('when song has been paused', function () {});
});
