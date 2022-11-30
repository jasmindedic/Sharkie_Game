class DrawableObject {
    image;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;


    loadImage(path) {
        this.image = new Image();
        this.image.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.height, this.width);
    }


    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Enemy || this instanceof Enemy_2 || this instanceof Enemy_3) {
            ctx.beginPath();
            ctx.linesWidth = "5";
            ctx.strokesStyle = "blue";
            ctx.rect(this.x, this.y, this.height, this.width);
            ctx.stroke();
        }
    }


    loadImages(arr) {
        arr.forEach(path => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }
}