var GameState = {


  init: function() {

  },


  preload: function() {

  },

  create: function() {
  },


};


var game = new Phaser.Game(360, 592, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');

