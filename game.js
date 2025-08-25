class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    // Karakter sprite sheet yükleme
    this.load.spritesheet('wizard_idle', 'assets/wizard_idle.png', {
      frameWidth: 64,
      frameHeight: 64
    });

    this.load.spritesheet('wizard_attack', 'assets/wizard_attack.png', {
      frameWidth: 64,
      frameHeight: 64
    });
  }

  create() {
    // Karakter ekleme
    this.player = this.add.sprite(200, 300, 'wizard_idle');

    // Idle animasyonu
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('wizard_idle', { start: 0, end: 13 }),
      frameRate: 10,
      repeat: -1
    });

    // Attack animasyonu
    this.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNumbers('wizard_attack', { start: 0, end: 6 }),
      frameRate: 12,
      repeat: 0
    });

    this.player.play('idle');

    // Klavye girişleri
    this.input.keyboard.on('keydown-SPACE', () => {
      this.player.play('attack');
      this.player.once('animationcomplete', () => {
        this.player.play('idle');
      });
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#2d2d2d',
  scene: [MainScene]
};

new Phaser.Game(config);
