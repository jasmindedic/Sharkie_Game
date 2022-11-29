class Light extends MovableObject {

    y = 0;
    width = 400;
    height = 600;

    constructor() {
        super().loadImage("images/3. Background/Layers/1. Light/bubbles.png");
        this.x = 0 + Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

}

