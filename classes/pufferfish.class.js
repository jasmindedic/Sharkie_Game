class Pufferfish extends MovableObject {
    IMAGES_IDLE = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    currenImage = 0;
    width = 80;
    height = 80;

    constructor(x, y) {
        super().loadImage(this.IMAGES_IDLE[0]);

        this.x = x;
        this.y = y;

        this.loadImages(this.IMAGES_IDLE);
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();

    }

    animate() {

        setStoppableInterval(() => {
            this.swimLeft();
        }, 1000 / 60);

        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 500);
    }
}