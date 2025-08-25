class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    // Şimdilik sadece tek bir görsel yüklüyoruz (sen sonra idle animasyon png'lerini ekleyeceksin)
    this.load.image('wizard_idle', 'assets/wizard/idle1.png');
  }

  create() {
    // Karakteri sahneye ekle
    this.player = this.add.sprite(200, 300, 'wizard_idle').setScale(2);

    // Basit kamera ayarı
    this.cameras.main.setBackgroundColor('#1d1f27');
  }

  update() {
    // Şimdilik boş, sonradan animasyon ve kontrolleri ekleyeceğiz
  }
}

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: MyGame,
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 600 }, debug: false }
  }
};

const game = new Phaser.Game(config);
