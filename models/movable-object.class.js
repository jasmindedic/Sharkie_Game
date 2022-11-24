class MovableObject {
    // Attributes
    x = 120;
    y = 250;
    image;
    height = 150;
    width = 100;

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