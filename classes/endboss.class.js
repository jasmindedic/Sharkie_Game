class Endboss extends MovableObject {
    x = 4000;
    y = 0;
    width = 250;
    height = 250;
    firstContactWithEndboss = false;
    currentAnimationImg = 0;
    world;
    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'

    ];

    IMAGES_FLOATING = [
        './img/2.Enemy/3 Final Enemy/2.floating/1.png',
        './img/2.Enemy/3 Final Enemy/2.floating/2.png',
        './img/2.Enemy/3 Final Enemy/2.floating/3.png',
        './img/2.Enemy/3 Final Enemy/2.floating/4.png',
        './img/2.Enemy/3 Final Enemy/2.floating/5.png',
        './img/2.Enemy/3 Final Enemy/2.floating/6.png',
        './img/2.Enemy/3 Final Enemy/2.floating/7.png',
        './img/2.Enemy/3 Final Enemy/2.floating/8.png',
        './img/2.Enemy/3 Final Enemy/2.floating/9.png',
        './img/2.Enemy/3 Final Enemy/2.floating/10.png',
        './img/2.Enemy/3 Final Enemy/2.floating/11.png',
        './img/2.Enemy/3 Final Enemy/2.floating/12.png',
        './img/2.Enemy/3 Final Enemy/2.floating/13.png',
        './img/2.Enemy/3 Final Enemy/Attack/1.png',
        './img/2.Enemy/3 Final Enemy/Attack/2.png',
        './img/2.Enemy/3 Final Enemy/Attack/3.png',
        './img/2.Enemy/3 Final Enemy/Attack/4.png',
        './img/2.Enemy/3 Final Enemy/Attack/5.png',
        './img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',

    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];


    endbossAppears_audio = new Audio('audio/endboss_appears.mp3');
    endbossRoar_audio = new Audio('audio/endboss_roar.mp3');
    endbossHurt_audio = new Audio('audio/endboss_hurt.mp3');



    constructor() {
        super().loadImage(this.IMAGES_INTRODUCE[0]);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.checkFirstContact();
            this.checkEndbossMovements();
            this.upDownLoop();
            this.leftRightLoop();
        }, 200);
    }

    checkFirstContact() {
        if (world.character.x >= world.level.endLevelX) {
            this.firstContactWithEndboss = true;
        }
    }

    checkEndbossMovements() {
        if (this.firstContactTrue()) {
            world.background_audio.pause();
            this.endbossAppears_audio.play();
            this.introduceEndboss();
        } else if (this.isHurt()) {
            this.hurtEndboss();
        } else if (this.isDead()) {
            this.deadEndboss();
        } else {
            if (this.firstContactOver()) {
                this.floatingEndboss();
            }
        }
    }

    introduceEndboss() {
        this.playAnimation(this.IMAGES_INTRODUCE);
        this.currentAnimationImg++;
    }

    floatingEndboss() {
        this.playAnimation(this.IMAGES_FLOATING);
        this.endbossRoar_audio.play();
    }

    hurtEndboss() {
        this.playAnimation(this.IMAGES_HURT);
        this.endbossHurt_audio.play();
    }

    deadEndboss() {
        this.endbossRoar_audio.pause();
        this.playAnimation(this.IMAGES_DEAD);
    }

    upDownLoop() {
        if (this.canvasTop()) {
            setStoppableInterval(() => {
                this.swimDown()
            }, 1000 / 60);

        } else if (this.canvasBottom()) {
            setStoppableInterval(() => {
                this.swimUp();
            }, 1000 / 60);
        }
    }

    leftRightLoop() {
        if (this.swimLeftRadius()) {
            setStoppableInterval(() => {
                this.swimLeft();
            }, 1000 / 60);

        } else if (this.swimRightRadius()) {
            setStoppableInterval(() => {
                this.swimRight();
            }, 1000 / 60);
        }
    }

    firstContactTrue() {
        return this.firstContactWithEndboss && this.currentAnimationImg < 10;
    }

    firstContactOver() {
        return this.firstContactWithEndboss && this.currentAnimationImg >= 10;
    }

    canvasTop() {
        return this.y <= 0 && this.firstContactWithEndboss;
    }

    canvasBottom() {
        return this.y >= 200 && this.firstContactWithEndboss;
    }

    swimLeftRadius() {
        return this.x >= 4000 && this.firstContactWithEndboss;
    }
    swimRightRadius() {
        return this.x <= 3800 && this.firstContactWithEndboss;
    }
}