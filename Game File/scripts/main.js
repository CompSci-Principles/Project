//Declaring variables for object to 
//be used in program
var pcs;
var player;
var world;
var back;
var gameOver;
var gameOn;

//This is the setup function P5 uses to set up the program
//before drawing anything
function setup() {
    
    //Initializing pcs, since the start function doesn't
    //create a new one
    pcs = new PCS();
    
    gameOn = false;
    //start a new game
    start();
    
}

function start() {
    
    pcs.reset();
    player = new Player();
    world = new World();
    back = new Background();

    gameOver = false;
    
    //Creating canvas for graphics and setting background color
    createCanvas(750, 500);
    background(66, 238, 244);
    
}

//This is the draw function that will be continuously 
//called to run the program
function draw() {
    
    //We go through everything by importance
    //and how we want to layer the graphics
    
    background(66, 238, 244);
    
    if(!gameOver) {
        
        tick();
        pcs.disp(gameOn);
        world.disp();
        player.disp();

    } else {

        back.tick();
        endGame();  
    }

    if(pcs.getHealth() < 0) {

        gameOver = true;

    }
}


//This function will be used to update all
//the parts of the program
function tick() {
 
    pcs.tick(gameOn);
    world.tick();
    player.tick(world, pcs, gameOn);
    back.tick();
    
    if(!gameOn) {
        if(random(1, 100) > 97) {
            
            player.jump();
            
        }
    }
    
}

function endGame() 
{
    background(0);
    fill(back.getR(), back.getG(), back.getB());
    textSize(100);
    text("Game Over", 100, 100, 1000, 1000);
    textSize(50);
    text("Score: " + pcs.getScore(), 100, 250, 1000, 1000);
    text("High Score: " + pcs.getHighScore(), 100, 300, 1000, 1000);
    
}


//This will handle key events so the user
//can interact with the program
function keyPressed() {
    
    if(!gameOver) {
    //The player will jump if any key is pressed
    player.jump();

        if(!gameOn) {

            gameOn = true;
            pcs.reset();
        }
    } else {
        
        gameOver = false;
        start();
        
    }
    
}