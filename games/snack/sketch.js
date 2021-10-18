/**
 * Setup
 */

 function setup() {
    createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    setCanvasPosToCenter();
    frameRate(SNACK_SPEED * 5);
}

/**
 * Draw
 */

const snack = new Snack();
const foods = [];
  
function draw() {
    background(0);

    snack.update();
    snack.checkEatFood(foods);

    if (snack.died()) {
        noLoop();
        textSize(45);
        text('You lose!', 320, 250);
    }

    if (foods.length < FOOD_MAX) {
        foods.push(new Food());
    }

    for (let i=0; i<foods.length; i++) {
        foods[i].draw();
    }
}

/**
 * Events
 */

function keyPressed() {
    if (DIRECTIONS.UP.includes(keyCode) && snack.direction != SNACK_DIRECTIONS.DOWN) {
        snack.direction = SNACK_DIRECTIONS.UP;
    }
    if (DIRECTIONS.DOWN.includes(keyCode) && snack.direction != SNACK_DIRECTIONS.UP) {
        snack.direction = SNACK_DIRECTIONS.DOWN;
    }
    if (DIRECTIONS.LEFT.includes(keyCode) && snack.direction != SNACK_DIRECTIONS.RIGHT) {
        snack.direction = SNACK_DIRECTIONS.LEFT;
    }
    if (DIRECTIONS.RIGHT.includes(keyCode) && snack.direction != SNACK_DIRECTIONS.LEFT) {
        snack.direction = SNACK_DIRECTIONS.RIGHT;
    }
}