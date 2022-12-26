class StatusBarLife extends DrawableObject {
    IMAGES_LIFEPOINTS = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/100_ .png'
    ];

    percentage = 100;
    x = 20;
    y = -20;
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