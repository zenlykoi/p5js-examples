class Food {
    constructor(x, y, level) {
        this.level = level || randomInteger(1, FOOD_LEVEL_MAX);
        this.width = FOOD_WIDTH * this.level;
        this.x = x || randomInteger(0, Math.round(SCREEN_WIDTH / this.width)) * FOOD_WIDTH;
        this.y = y || randomInteger(0, Math.round(SCREEN_HEIGHT / this.width)) * FOOD_WIDTH;
    }

    draw() {
        fill(FOOD_COLOR);

        rect(this.x, this.y, this.width, this.width);
    }
}