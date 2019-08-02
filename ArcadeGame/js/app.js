//Creating The Captain

class Captain {
    constructor() {
        this.sprite = "images/char-boy.png";
        this.stepRight = 101;
        this.jumpDown = 83;
        this.startX = this.stepRight * 2; //this.stepRight * 2 places the hero 2 blocks to the right (middle block) on the x axis.
        this.startY = (this.jumpDown * 4) + 55; //this.jumpDown * 5, places the hero 5 blocks down from the top row.
        this.x = this.startX;
        this.y = this.startY;
        this.victory = false;


    }
    update() {
        //collision checking
        for (let enemy of allEnemies) {
            //condition check whether player collide with enemy
            if (this.y === enemy.y && (enemy.x + enemy.stepRight / 2 > this.x && enemy.x < this.x + this.stepRight / 2)) {
                this.reset();
            }
        }
        //Check win condition

        // if (this.y === 55) {
            if (this.y === -28) {
            this.victory = true;
        }
    }
    //Resetting the position of Captain
    reset() {
        this.x = this.startX;
        this.y = this.startY;
    }
    // Draw the Captain position on the screen (x-coord and y-coord)
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    //stepRight = the distance between one block to another from the x axis, 
    // jumpDown = distance between the blocks on the y axis.
    handleInput(input) {
        switch (input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= this.stepRight;

                }
                break;
            case 'up':
                // if (this.y > this.jumpDown) {
                    if(this.y > 0){
                    this.y -= this.jumpDown;
                }
                break;
            case 'right':
                if (this.x < this.stepRight * 4) {
                    this.x += this.stepRight;
                }
                break;
            case 'down':
                if (this.y < this.jumpDown * 4) {
                    this.y += this.jumpDown;
                }
                break;
        }
    }

}
const player = new Captain();



// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y + 55; //center
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.stepRight = 101;
    this.boundary = this.stepRight * 5;
    this.resetPos = -this.stepRight;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //Enemy not passed the boundry

    if (this.x < this.boundary) {
        this.x += this.speed * dt;
    } else {
        this.x = this.resetPos; //Reset position to start
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


//const player = new Captain();
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const bug1 = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy((-101 * 2.5), 83, 300);
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3);
console.log(allEnemies);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});