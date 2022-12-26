class Jellyfish extends MovableObject {
    IMAGES_IDLE = [
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/S｣per dangerous/Green 4.png',
    ];

    currenImage = 0;
    width = 50;
    height = 80;
    speed = 0.15 + Math.random() * 0.5;

    constructor(x, y) {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
        this.x = x;
        this.y = y;
    }

    animate() {

        setStoppableInterval(() => {
            this.upDownLoop();
        }, 500);

        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 500);

    }

    upDownLoop() {

        if (this.y >= 400) {
            setStoppableInterval(() => {
                this.swimUp()
            }, 1000 / 60);

        } else if (this.y <= 0) {
            setStoppableInterval(() => {
                this.swimDown();
            }, 1000 / 60);
        }
    }
}