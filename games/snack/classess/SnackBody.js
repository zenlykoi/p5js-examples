class SnackBody {
    constructor(x, y, isHead) {
        this.x = x;
        this.y = y;
        this.isHead = isHead || false;
        this.width = SNACK_BODY_LENGTH;
    }

    draw() {
        if (this.isHead) {
            fill(SNACK_HEAD_COLOR);
        }
        else {
            fill(SNACK_BODY_COLOR);
        }

        rect(this.x, this.y, this.width, this.width);
    }
}