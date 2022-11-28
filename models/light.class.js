class Light extends MovableObject {

    y = 0;
    width = 300;
    height = 300;

    constructor() {
        super().loadImage("images/3. Background/Layers/1. Light/bubbles.png");
        this.y = 0 + Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }

}

