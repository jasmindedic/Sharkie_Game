class StatusBar extends DrawableObject {

    IMAGES = [
        'images/4. Marcadores/Purple/0_ .png',
        'images/4. Marcadores/Purple/20__1.png',
        'images/4. Marcadores/Purple/40_ .png',
        'images/4. Marcadores/Purple/60_ .png',
        'images/4. Marcadores/Purple/80_ .png',
        'images/4. Marcadores/Purple/100_ .png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 0;
        this.width = 50;
        this.height = 200;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // => 0....5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.image = this.imageCache[path];
    }

    resolveImageIndex() {
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
        } else {
            return 0;
        }
    }
}

