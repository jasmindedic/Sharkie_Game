class Enemy extends MovableObject {
    y = 260;
    height = 80;
    width = 80
    IMAGES_WALKING = [
        'images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    constructor() {
        super().loadImage("images/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png")
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

}