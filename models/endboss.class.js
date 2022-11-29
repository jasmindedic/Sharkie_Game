class Endboss extends MovableObject {

    height = 400;
    width = 400;
    y = -100;

    IMAGES_WALKING = [
        "images/2.Enemy/3 Final Enemy/Attack/1.png",
        "images/2.Enemy/3 Final Enemy/Attack/2.png",
        "images/2.Enemy/3 Final Enemy/Attack/3.png",
        "images/2.Enemy/3 Final Enemy/Attack/4.png",
        "images/2.Enemy/3 Final Enemy/Attack/5.png",
        "images/2.Enemy/3 Final Enemy/Attack/6.png",

    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING);
        this.x = 4000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
}