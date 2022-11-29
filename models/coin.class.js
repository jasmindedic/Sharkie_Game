class Coin extends MovableObject {
    IMAGES_COINS = [
        'images/4. Marcadores/1. Coins/1.png',
        'images/4. Marcadores/1. Coins/2.png',
        'images/4. Marcadores/1. Coins/3.png',
        'images/4. Marcadores/1. Coins/4.png',
    ];

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
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 200);
    }
}