class Character extends MovableObject {
    width = 150;
    height = 100;
    y = 200;

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_HURT = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
    ];


    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    IMAGES_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png',
    ];

    swim_audio = new Audio('audio/swimming.mp3');
    collect_audio = new Audio('audio/collect.mp3');
    electroshock_audio = new Audio('audio/hurt.mp3');
    attack_audio = new Audio('audio/attack_bubble.mp3');
    game_lose_audio = new Audio('audio/game_over.mp3');
    hurt_by_endboss_audio = new Audio('audio/hurt_by_endbossmp3.mp3');

    speed = 8;
    world;
    currentImage = 0;

    constructor() {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.swim_audio.pause();
            this.playSwimmingMovements();
            this.world.cameraX = -this.x + 100;
        }, 1000 / 60);

        setStoppableInterval(() => {
            this.playMovementsImages();
        }, 200);
    }

    playSwimmingMovements() {
        this.swimmingRight();
        this.swimmingLeft();
        this.swimmingUp();
        this.swimmingDown();
    }

    playMovementsImages() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isSwimming()) {
            this.playAnimation(this.IMAGES_SWIM);
        } else if (this.isAttacking()) {
            this.playAnimation(this.IMAGES_ATTACK);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

    swimmingRight() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.endLevelX) {
            this.swimRight();
            this.swim_audio.play();
        }
    }

    swimmingLeft() {
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.swimLeft();
            this.swim_audio.play();
            this.changeDirection = true;
        }
    }
    swimmingUp() {
        if (this.world.keyboard.UP && this.y > 0) {
            this.swimUp();
            this.swim_audio.play();
        }
    }

    swimmingDown() {
        if (this.world.keyboard.DOWN && this.y < 380) {
            this.swimDown();
            this.swim_audio.play();
        }
    }

    isSwimming() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }

    isAttacking() {
        return this.world.keyboard.SPACE && this.world.endboss.firstContactWithEndboss;
    }
}