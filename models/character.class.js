class Character extends MovableObject {

    width = 200;
    height = 200;
    y = 120;
    speed = 7;

    /* Htibox */
    offset =
        {
            top: 120,
            left: 30,
            right: 40,
            bottom: 30,
        }

    IMAGES_WALKING = [
        'images/1.Sharkie/3.Swim/1.png',
        'images/1.Sharkie/3.Swim/2.png',
        'images/1.Sharkie/3.Swim/3.png',
        'images/1.Sharkie/3.Swim/4.png',
        'images/1.Sharkie/3.Swim/5.png',
        'images/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_DEAD = [
        "images/1.Sharkie/6.dead/2.Electro_shock/1.png",
        "images/1.Sharkie/6.dead/2.Electro_shock/2.png",
        "images/1.Sharkie/6.dead/2.Electro_shock/3.png",
        "images/1.Sharkie/6.dead/2.Electro_shock/4.png",
        "images/1.Sharkie/6.dead/2.Electro_shock/5.png",
        "images/1.Sharkie/6.dead/2.Electro_shock/6.png",
        "images/1.Sharkie/6.dead/2.Electro_shock/7.png",
        "images/1.Sharkie/6.dead/2.Electro_shock/8.png",
        "images/1.Sharkie/6.dead/2.Electro_shock/9.png",
        "images/1.Sharkie/6.dead/2.Electro_shock/10.png"
    ];

    IMAGES_HURT = [
        "images/1.Sharkie/5.Hurt/2.Electric shock/o1.png",
        "images/1.Sharkie/5.Hurt/2.Electric shock/o2.png",
        "images/1.Sharkie/5.Hurt/2.Electric shock/1.png",
        "images/1.Sharkie/5.Hurt/2.Electric shock/2.png",
        "images/1.Sharkie/5.Hurt/2.Electric shock/3.png"
    ];

    world;
    swimming_sound = new Audio("./audio/swimming.wav");

    constructor() {
        super().loadImage("images/1.Sharkie/3.Swim/1.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
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
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                /*  this.energy = -1; */
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    // Walk animation
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);
    }

    jump() {

    }
}