class Enemy_3 extends MovableObject {
    y = 260;
    height = 60;
    width = 60
    IMAGES_WALKING = [
        'images/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'images/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'images/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'images/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
    ];

    constructor() {
        super().loadImage("images/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png")
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 3800;
        this.y = 150 + Math.random() * 1200;
        this.speed = 0.05 + Math.random() * 0.11;
        this.animate();
    }

    animate() {
        this.moveDown();

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

}