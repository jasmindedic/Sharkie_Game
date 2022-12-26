class World {

    character = new Character();
    endboss = new Endboss();
    statusBarLife = new StatusBarLife();
    statusBarCoin = new StatusBarCoin();
    statusBarEndboss = new StatusBarEndboss();

    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;

    throwableObjects = [];

    background_audio = new Audio('audio/background_loop.mp3');
    game_win_audio = new Audio('audio/game_win.mp3');
    game_lose_audio = new Audio('audio/game_over.mp3');

    gameOver = false;

    constructor(canvas, keyboard) {

        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.play();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToCanvas(this.level.backgroundObjects);
        this.addObjectsToCanvas(this.level.pufferfish);
        this.addObjectsToCanvas(this.level.jellyfish);
        this.addObjectsToCanvas(this.level.coins);
        this.addObjectsToCanvas(this.level.hearts);
        this.addObjectsToCanvas(this.throwableObjects);
        this.addToCanvas(this.character);


        this.addToCanvas(this.endboss);

        this.addToCanvas(this.statusBarEndboss);
        this.statusBarEndboss.x = this.endboss.x + 50;
        this.statusBarEndboss.y = this.endboss.y - 80;

        this.ctx.translate(-this.cameraX, 0);
        this.addToCanvas(this.statusBarLife);
        this.addToCanvas(this.statusBarCoin);
        this.ctx.translate(this.cameraX, 0);

        this.ctx.translate(-this.cameraX, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

    }

    setWorld() {
        this.character.world = this;
    }

    play() {
        this.playBackgroundAudio();

        setStoppableInterval(() => {
            this.checkCollisionPufferfish();
            this.checkCollisionJellyfish();
            this.checkCollisionCoins();
            this.checkCollisionHearts();
            this.checkCollisionBubbles();
            this.shootBubble();
            this.checkCollisionEndboss();
            this.checkGameStatus();
        }, 200);
    }

    addToCanvas(movableObject) {
        if (movableObject.changeDirection) {
            this.mirrorImage(movableObject);
        };

        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);

        if (movableObject.changeDirection) {
            this.mirrorImageReverse(movableObject);
        }
    }

    addObjectsToCanvas(objects) {
        objects.forEach(object => {
            this.addToCanvas(object);
        })
    }

    mirrorImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    mirrorImageReverse(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }

    playBackgroundAudio() {
        this.background_audio.play();
        this.background_audio.loop = true;
    }

    checkCollisionPufferfish() {
        this.level.pufferfish.forEach((pufferfish) => {
            if (this.character.isColliding(pufferfish)) {
                this.character.clashWithEnemy(pufferfish);
                this.statusBarLife.setPercentage(this.character.lifePoints);
                this.character.electroshock_audio.play();
            }
        })
    }

    checkCollisionJellyfish() {
        this.level.jellyfish.forEach((jellyfish) => {
            if (this.character.isColliding(jellyfish)) {
                this.character.clashWithEnemy(jellyfish);
                this.statusBarLife.setPercentage(this.character.lifePoints);
                this.character.electroshock_audio.play();
            }
        })
    }


    checkCollisionCoins() {
        this.level.coins.forEach((coin, i) => {
            if (this.character.isColliding(coin)) {
                if (this.character.coinTotal < 100) {
                    this.character.collectCoin();
                    this.level.coins.splice(i, 1);
                    this.statusBarCoin.setPercentage(this.character.coinTotal);
                    this.character.collect_audio.play();
                }
            }
        })
    }

    checkCollisionHearts() {
        this.level.hearts.forEach((heart, i) => {
            if (this.character.isColliding(heart)) {
                if (this.character.lifePoints < 100) {
                    this.character.collectHeart();
                    this.statusBarLife.setPercentage(this.character.lifePoints);
                    this.level.hearts.splice(i, 1);
                    this.character.collect_audio.play();
                }
            }
        })
    }

    checkCollisionBubbles() {
        this.throwableObjects.forEach((bubble, i) => {
            if (this.endboss.isColliding(bubble)) {
                this.endboss.clashWithBubble(bubble);
                this.throwableObjects.splice(i, 1);
                this.statusBarEndboss.setPercentage(this.endboss.lifePoints);
            }
        })
    }

    shootBubble() {
        if (this.keyboard.SPACE && !this.character.changeDirection && this.endboss.firstContactWithEndboss && this.statusBarCoin.percentage > 0) {
            let bubble = new ThrowableObject(this.character.x + 150, this.character.y + 60);
            this.throwableObjects.push(bubble);
            this.character.attack_audio.play();
            this.character.cashCoin();
            this.statusBarCoin.setPercentage(this.character.coinTotal);
        }
    }

    checkCollisionEndboss() {
        if (this.character.isColliding(this.endboss)) {
            this.character.clashWithEndboss(this.endboss);
            this.statusBarLife.setPercentage(this.character.lifePoints);
        }
    }

    checkGameStatus() {
        if (this.character.isDead()) {
            this.loseGame();
        } else if (this.endboss.isDead()) {
            this.winGame();
        }
    }

    loseGame() {
        if (!this.gameOver) {
            this.background_audio.pause();
            this.game_lose_audio.play();
            setTimeout(() => {
                document.getElementById('game-section').classList.add('d-none');
                document.getElementById('game-over-section').classList.remove('d-none');
                document.getElementById('lose-game').classList.remove('d-none');
            }, 2500);
        }
        this.gameOver = true;
    }

    winGame() {
        if (!this.gameOver) {
            this.game_win_audio.play();
            setTimeout(() => {
                document.getElementById('game-section').classList.add('d-none');
                document.getElementById('game-over-section').classList.remove('d-none');
                document.getElementById('win-game').classList.remove('d-none');
            }, 2500);
        }
        this.gameOver = true;
    }
}