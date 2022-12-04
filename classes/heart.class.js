class Heart extends MovableObject {
    IMAGES_HEART = [
        'img/4. Marcadores/green/100_  copia 3.1.png',
        'img/4. Marcadores/green/100_  copia 3.3.png',
    ];

    currenImage = 0;
    width = 40;
    height = 40;

    constructor(x, y) {
        super().loadImage(this.IMAGES_HEART[0]);
        this.loadImages(this.IMAGES_HEART);
        this.x = x;
        this.y = y;
        this.animate();

    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_HEART);
        }, 500);
    }
}