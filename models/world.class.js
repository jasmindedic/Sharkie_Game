class World {

    // Attributes
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    ctx;

    // Constructor
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.draw();
    }

    // Functions
    draw() {
        this.ctx.drawImage(this.character.image, this.character.x, this.character.y, this.character.height, this.character.width);
    }
}