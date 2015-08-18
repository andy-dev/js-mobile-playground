var GameState = {
  preload: function(){
    this.load.image('background', 'assets/images/background.png');
    this.load.image('chicken', 'assets/images/chicken.png');
    this.load.image('horse', 'assets/images/horse.png');
    this.load.image('pig', 'assets/images/pig.png');
    this.load.image('sheep', 'assets/images/sheep3.png');

  },
  create: function(){
    this.background = this.game.add.sprite(0,0,'background');
    this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken')
    this.chicken.anchor.setTo(0.5, 0.5); //change location of anchor point to center
    this.chicken.scale.setTo(0.5);

    this.horse = this.game.add.sprite(500,300, 'horse');
    this.horse.anchor.setTo(0.5);
    this.horse.scale.setTo(1,1) //flip on x stay the same on y

    this.sheep = this.game.add.sprite(100,250, 'sheep');
    this.sheep.scale.setTo(0.5);
    this.sheep.angle = -45;
  },
  update: function(){
    this.sheep.angle += 0.5;
  }
};

var game = new Phaser.Game(640, 360, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');