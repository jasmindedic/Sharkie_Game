class ThrowableObject extends MovableObject {
    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;
        this.height = 25;
        this.width = 25;
        this.shoot();
    }

    shoot() {
        this.speedY = 30;
        setStoppableInterval(() => {
            this.x += 10;
        }, 50);
    }
}