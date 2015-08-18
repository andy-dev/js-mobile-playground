var GameState = {
  preload: function(){
    this.load.image('background', 'assets/images/background.png')

  },
  create: function(){
    this.background = this.game.add.sprite(0,0,'background')
  },
  update: function(){

  }
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');