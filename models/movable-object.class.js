class MovableObject {
    // Attributes
    x = 120;
    y = 280;
    image;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    // Functions 
    loadImage(path) {
        this.image = new Image();
        this.image.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.height, this.width);
    }

    drawFrame(ctx) {
        ctx.beginPath();
        ctx.linesWidth = "5";
        ctx.strokesStyle = "blue";
        ctx.rect(this.x, this.y, this.height, this.width);
        ctx.stroke();
    }

    loadImages(arr) {
        arr.forEach(path => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.image = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log("Moving right");
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 100 / 60);
    }

    moveUp() {
        setInterval(() => {
            this.y -= this.speed;
        }, 100 / 60);
    }

    moveDown() {
        setInterval(() => {
            this.y += this.speed;
        }, 100 / 60);
    }
}