class StatusBarEndboss extends DrawableObject {
    IMAGES_LIFEPOINTS = [
        'img/4. Marcadores/red/0_endboss.png',
        'img/4. Marcadores/red/20_endboss.png',
        'img/4. Marcadores/red/40_endboss.png',
        'img/4. Marcadores/red/60_ endboss.png',
        'img/4. Marcadores/red/80_endboss.png',
        'img/4. Marcadores/red/100_endboss.png',
    ];

    percentage = 100;
    width = 200;
    height = 80;

    constructor() {
        super().loadImage(this.IMAGES_LIFEPOINTS[0]);
        this.loadImages(this.IMAGES_LIFEPOINTS);
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFEPOINTS[this.runThroughImages()];
        this.img = this.imageCache[path];
    }

    runThroughImages() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}