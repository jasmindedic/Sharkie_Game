class BackgroundObject extends MovableObject {

    height = 730;
    width = 400;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 730 - this.height;
    }
}