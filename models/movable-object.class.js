class MovableObject extends DrawableObject {
    // Attributes
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    coinTotal = 0;

    offset =
        {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }

    // Functions
    isColliding(obj) {
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom;
        //obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    }

    /*  isColliding(mo) {
         return this.x + this.width > mo.x &&
             this.y + this.height > mo.y &&
             this.x < mo.x &&
             this.y < mo.height;
     } */

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    /* Coins */
    collectCoin() {
        this.coinTotal += 20;
        if (this.coinTotal >= 100) {
            this.coinTotal = 100;
        }
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