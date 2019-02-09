class Paddle {

    constructor(opts) {
        this.x = opts.x;
        this.y = opts.y;
        this.width = opts.width;
        this.height = opts.height;
        this.color = opts.color;
        this.velocity = 7;
        this.speed = 5;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveDown() {
        this.y += this.velocity;
        if ((this.y + this.height) > 480) {
            this.y = 480 - this.height;
        }
        console.log("Moving down")

    }

    moveUp() {
        this.y -= this.velocity;
        if (this.y < 0) {
            this.y = 0;
        }
        console.log("Moving up")
    }

}

export default Paddle;
