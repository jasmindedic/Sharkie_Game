class Heart extends MovableObject {
    IMAGES_HEARTS = [
        'images/4. Marcadores/green/100_  copia 3.png',
        'images/4. Marcadores/green/heart_4.png',
        'images/4. Marcadores/green/heart_5.png',
        'images/4. Marcadores/green/heart_6.png',
    ];

    width = 40;
    height = 40;

    constructor(x, y) {
        super().loadImage(this.IMAGES_HEARTS[0]);
        this.loadImages(this.IMAGES_HEARTS);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_HEARTS);
        }, 200);
    }
}