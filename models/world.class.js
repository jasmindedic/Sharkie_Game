class World {

    // Attributes
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarCoins = new StatusBarCoin();
    throwableObjects = [];

    // Constructor
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkCollisionCoins();
        this.checkCollisionHearts();
        this.runThrowableObject();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
        }, 200);
    }

    /* Coins */
    checkCollisionCoins() {
        setInterval(() => {
            this.level.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    this.level.coins.splice(coin, 1);
                    this.character.collectCoin();
                    this.statusBarCoins.setPercentage(this.character.coinTotal);
                }
            });
        }, 100);
    }

    /* Hearts */
    checkCollisionHearts() {
        setInterval(() => {
            this.level.hearts.forEach((heart) => {
                if (this.character.isColliding(heart)) {
                    this.level.hearts.splice(heart, 1)
                    this.character.collectHearts();
                    this.statusBar.setPercentage(this.character.energy);
                }
            });
        }, 100);
    }

    /* Throwable object */
    runThrowableObject() {
        setInterval(() => {
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.SPACE) {
            console.log("bubble");
            let bubble = new ThrowableObject(this.character.x + 110, this.character.y + 110);
            this.throwableObjects.push(bubble);
        }
    }


    // Functions
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.enemies_2);
        this.addObjectsToMap(this.level.enemies_3);
        this.addObjectsToMap(this.level.endBoss);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.hearts);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0); // Back
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarCoins);
        this.ctx.translate(this.camera_x, 0); // Forwards

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}