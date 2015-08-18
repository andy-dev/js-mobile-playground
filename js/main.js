var GameState = {
  preload: function(){
    this.load.image('background', 'assets/images/background.png');
    this.load.image('chicken', 'assets/images/chicken.png');
    this.load.image('horse', 'assets/images/horse.png');
    this.load.image('pig', 'assets/images/pig.png');
    this.load.image('sheep3', 'assets/images/sheep3.png');

  },
  create: function(){
    this.background = this.game.add.sprite(0,0,'background');
    this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken')
    this.chicken.anchor.setTo(0.5, 0.5); //change location of anchor point to center
    this.chicken.scale.setTo(0.5);
  },
  update: function(){

  }
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');