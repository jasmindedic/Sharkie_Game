class StatusBarCoin extends DrawableObject {
    IMAGES_COINS = [
        'images/4. Marcadores/Purple/0_ _1.png',
        'images/4. Marcadores/Purple/20_ .png',
        'images/4. Marcadores/Purple/40_ _1.png',
        'images/4. Marcadores/Purple/60_ _1.png',
        'images/4. Marcadores/Purple/80_ _1.png',
        'images/4. Marcadores/Purple/100__1.png'
    ];

    percentage = 100;


    constructor() {
        super().loadImage(this.IMAGES_COINS[0]);
        this.loadImages(this.IMAGES_COINS);
        this.x = 10;
        this.y = 35;
        this.width = 50;
        this.height = 200;
        this.setPercentage(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COINS[this.runThroughImages()];
        this.image = this.imageCache[path];
    }

    runThroughImages() {
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage == 20) {
            return 1;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 100) {
            return 5;
        }
    }
}