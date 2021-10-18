const DIRECTIONS = {
    UP : [87, 38],
    DOWN : [83, 40],
    LEFT : [65, 37],
    RIGHT : [68, 39]
};

const SNACK_DIRECTIONS = {
    UP : 1,
    DOWN : 2,
    LEFT : 3,
    RIGHT : 4
};

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 480;

const SNACK_START_LENGTH = 5;
const SNACK_BODY_LENGTH = 10;
const SNACK_SPEED = 3;
const SNACK_START_DIRECTION = SNACK_DIRECTIONS.RIGHT;
const SNACK_MAX_LENGTH = 500;
const SNACK_BODY_COLOR = 'white';
const SNACK_HEAD_COLOR = 'red';
const SNACK_START_POINT = {
    x : 30,
    y : Math.round(SCREEN_HEIGHT / 2) + Math.round(Math.round(SCREEN_HEIGHT / 2) % 10)
};

const FOOD_WIDTH = 10;
const FOOD_COLOR = 'yellow';
const FOOD_MAX = 5;
const FOOD_LEVEL_MAX = 3;