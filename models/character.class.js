class Character extends MovableObject {

    width = 220;
    height = 220;
    y = 120;
    speed = 10;
    IMAGES_WALKING = [
        'images/1.Sharkie/3.Swim/1.png',
        'images/1.Sharkie/3.Swim/2.png',
        'images/1.Sharkie/3.Swim/3.png',
        'images/1.Sharkie/3.Swim/4.png',
        'images/1.Sharkie/3.Swim/5.png',
        'images/1.Sharkie/3.Swim/6.png'
    ];
    world;
    swimming_sound = new Audio("./audio/swimming.wav");

    constructor() {
        super().loadImage("images/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.swimming_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.DOWN && this.y < this.world.level.level_end_y_down) {
                this.y += this.speed;
                this.otherDirection = false;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.UP && this.y > this.world.level.level_end_y_up) {
                this.y -= this.speed;
                this.otherDirection = false;
                this.swimming_sound.play();
            }


            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Walk animation
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);
    }

    jump() {

    }
}