class Level {
    enemies;
    enemies_2;
    enemies_3;
    endBoss;
    lights;
    backgroundObjects;
    coins;
    hearts;
    level_end_x = 3800;
    level_end_y_down = 230;
    level_end_y_up = -100;

    constructor(backgroundObjects, lights, enemies, enemies_2, enemies_3, endBoss, coins, hearts) {
        this.backgroundObjects = backgroundObjects;
        this.lights = lights;
        this.enemies = enemies;
        this.enemies_2 = enemies_2;
        this.enemies_3 = enemies_3;
        this.endBoss = endBoss;
        this.coins = coins;
        this.hearts = hearts;
    }
}