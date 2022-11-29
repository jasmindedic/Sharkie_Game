class Level {
    enemies;
    lights;
    backgroundObjects;
    level_end_x = 3800;
    level_end_y_down = 230;
    level_end_y_up = -100;

    constructor(enemies, lights, backgroundObjects) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
    }
}