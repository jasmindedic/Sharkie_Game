class MovableObject {
    // Attributes
    x = 120;
    y = 400;
    image;

    // Functions 
    loadImage(path) {
        this.image = new Image();
        this.image.src = path;
    }

    moveRight() {
        console.log("Moving right");
    }

    moveLeft() {

    }
}