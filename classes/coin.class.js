class Coin extends MovableObject {
    IMAGES_COINS = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ];

    currenImage = 0;
    width = 40;
    height = 40;

    constructor(x, y) {
        super().loadImage(this.IMAGES_COINS[0]);
        this.loadImages(this.IMAGES_COINS);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 500);
    }
}