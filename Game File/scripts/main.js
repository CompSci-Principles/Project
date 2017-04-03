//Declaring variables for object to 
//be used in program
var pcs;
var player;
var world;
var back;
var gameOver;

//This is the setup function P5 uses to set up the program
//before drawing anything
function setup() {
    
    //Initializing objects
    pcs = new PCS();
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
    
    if(!gameOver) {
        background(66, 238, 244);
        tick();
        pcs.disp();
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
 
    pcs.tick();
    fill(255);
    world.tick();
    player.tick(world, pcs);
    back.tick();
    
}

function endGame() {
    background(0);
    fill(back.getR(), back.getG(), back.getB());
    textSize(100);
    text("Game Over", 100, 200, 1000, 1000);
    textSize(50);
    text("Score: " + pcs.getScore(), 250, 350, 1000, 1000);
    
}


//This will handle key events so the user
//can interact with the program
function keyPressed() {
    
    //The player will jump if any key is pressed
    player.jump();
    
}
