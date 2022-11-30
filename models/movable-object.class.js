class MovableObject extends DrawableObject {
    // Attributes
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    // Functions

    // Collision Formel
    /*  isColliding(obj) {
         return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
             (this.Y + this.offsetY + this.height) >= obj.Y &&
             (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
             obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
     } */

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.height;
    }

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