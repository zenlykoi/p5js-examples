class Snack {
    constructor() {
        this.body = [];
        this.width = SNACK_BODY_LENGTH;
        this.direction = SNACK_START_DIRECTION;
        this.maxLength = SNACK_MAX_LENGTH;
        this.alive = true;
        this.score = 0;

        for (let i=0; i<SNACK_START_LENGTH; i++) {
            this.body.push(new SnackBody(
                SNACK_START_POINT.x + (i * 10),
                SNACK_START_POINT.y,
                (i == SNACK_START_LENGTH - 1) ? true : false)
            );
        }
    }

    died() {
        return !this.alive;
    }

    head() {
        return this.body.find(function(body){
            return body.isHead;
        });
    }

    length() {
        return this.body.length;
    }

    draw() {
        for (let i=0; i<this.length(); i++) {
            this.body[i].draw();
        }
    }

    eat(food) {
        if (this.length() > this.maxLength) {
            return;
        }
        
        for (let i=0; i<food.level; i++) {
            this.body.unshift(new SnackBody(
                this.body[0].x,
                this.body[0].y
            ));
        }
    }

    checkEatFood(foods) {
        const head = this.head();
        const foodIndex = foods.findIndex(function(food){
            return (food.x + food.width) > head.x
                && food.x <= head.x
                && (food.y + food.width) > head.y
                && food.y <= head.y;
        });

        if (foodIndex > -1) {
            this.score += foods[foodIndex].level;
            this.eat(foods[foodIndex]);
            foods.splice(foodIndex, 1);
        }
    }

    checkLive() {
        const head = this.head();
        for (let i=0; i<this.length() - 1; i++) {
            if (this.body[i].x == head.x && this.body[i].y == head.y) {
                this.alive = false;
                break;
            }
        }
    }

    changeBodyCoordinate() {
        const head = this.head();
        const oldCoordinate = this.body.map(function(body){
            return {
                x: body.x,
                y: body.y
            }
        });

        switch (this.direction) {
            case SNACK_DIRECTIONS.UP:
                if (head.y <= 0) {
                    head.y = SCREEN_HEIGHT;
                }
                else {
                    head.y -= this.width;
                }
                break;
            case SNACK_DIRECTIONS.DOWN:
                if (head.y >= SCREEN_HEIGHT - this.width) {
                    head.y = 0;
                }
                else {
                    head.y += this.width;
                }
                break;
            case SNACK_DIRECTIONS.LEFT:
                if (head.x <= 0) {
                    head.x = SCREEN_WIDTH;
                }
                else {
                    head.x -= this.width;
                }
                break;
            case SNACK_DIRECTIONS.RIGHT:
                if (head.x >= SCREEN_WIDTH - this.width) {
                    head.x = 0;
                }
                else {
                    head.x += this.width;
                }
                break;
            default:
                break;
        }
        
        for (let i=0; i<this.length() - 1; i++) {
            this.body[i].x = oldCoordinate[i+1].x;
            this.body[i].y = oldCoordinate[i+1].y;
        }
    }

    displayScore() {
        textSize(40);
        fill('orange');
        text(this.score, 10, 40);
    }

    update() {
        this.changeBodyCoordinate();
        this.draw();
        this.checkLive();
        this.displayScore();
    }
}