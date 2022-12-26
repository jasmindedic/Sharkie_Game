class Level {
    backgroundObjects;
    pufferfish;
    jellyfish;
    coins;
    hearts;
    endLevelX = 3800;

    constructor(backgroundObjects, pufferfish, jellyfish, coins, hearts) {
        this.backgroundObjects = backgroundObjects;
        this.pufferfish = pufferfish;
        this.jellyfish = jellyfish;
        this.coins = coins;
        this.hearts = hearts;
    }
}