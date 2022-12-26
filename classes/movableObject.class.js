class MovableObject extends DrawableObject {
    speed = 0.15;
    changeDirection = false;
    lifePoints = 100;
    coinTotal = 0;
    lastClash = 0;
    world;

    isColliding(movableObject) {
        return this.x + this.width > movableObject.x &&
            this.y + this.height > movableObject.y &&
            this.x < movableObject.x &&
            this.y < movableObject.y + movableObject.height;
    }

    clashWithEnemy() {
        this.lifePoints -= 1;
        if (this.lifePoints <= 0) {
            this.lifePoints = 0;
        } else {
            this.lastClash = new Date().getTime();
        }
    }

    clashWithEndboss() {
        this.lifePoints -= 5;
        if (this.lifePoints <= 0) {
            this.lifePoints = 0;
        } else {
            this.lastClash = new Date().getTime();
        }
    }

    clashWithBubble() {
        this.lifePoints -= 20;
        if (this.lifePoints <= 0) {
            this.lifePoints = 0;
        } else {
            this.lastClash = new Date().getTime();
        }
    }

    collectCoin() {
        this.coinTotal += 20;
        if (this.coinTotal >= 100) {
            this.coinTotal = 100;
        }
    }

    collectHeart() {
        this.lifePoints += 20;
        if (this.lifePoints >= 100) {
            this.lifePoints = 100;
        }
    }

    cashCoin() {
        this.coinTotal -= 20;
        if (this.coinTotal == 0) {
            this.coinTotal = 0;
        }
    }

    isDead() {
        return this.lifePoints == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastClash;
        return timepassed < 500;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    swimLeft() {
        this.x -= this.speed;
    }

    swimRight() {
        this.x += this.speed;
        this.changeDirection = false;
    }

    swimUp() {
        this.y -= this.speed;
    }

    swimDown() {
        this.y += this.speed;
    }

}