/*
    DESCRIPTION: This class handles operating a game using the p5.js libraries including the main loop, start, and game over handlers.
    
    Notes:
        Name: scripts/main.js
        Author: John S. Samuels, II
        Date: 4/9/2017

*/

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
    
    //This variable tells the computer to play the starting sequence first
    gameOn = false;
    //start a new game
    start();
    
}


//This function is used when we want to start a new game
function start() {
    
    //Reset the PCS and create a new game
    pcs.reset();
    player = new Player();
    world = new World();
    back = new Background();

    //This tells the program that the game is no longer over
    gameOver = false;
    
    //Creating canvas for graphics and setting background color
    createCanvas(750, 500);
    //background(66, 238, 244);
    background(back.getR(), back.getG(), back.getB());
    
}

//This is the draw function that will be continuously 
//called to run the program
function draw() {
    
    //We go through everything by importance
    //and how we want to layer the graphics
    
    //paint the background
    background(back.getR(), back.getG(), back.getB());
    
    //We want to run the game is the game isn't over
    if(!gameOver) {
        
        //update and display the program
        tick();
        pcs.disp(gameOn);
        world.disp();
        player.disp();

    } else {
        
        //We use the endGame function when the game is over
        endGame();  
    }

    //This is to tell the program the game is over when the player dies enough
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
    
    //This is a very very simple ai for the start of the program
    if(!gameOn) {
        if(random(1, 100) > 97) {
            
            player.jump();
            
        }
    }
    
}

//This function is called when the game is over
function endGame() 
{
    //We first update the background colors
    back.tick();
    
    //We set the background to black
    background(0);
    
    //We utilize the background object to get words that change color
    fill(back.getR(), back.getG(), back.getB());
    
    //Then we display all of the text
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

        //This is to start the game if it isn't started
        if(!gameOn) {

            gameOn = true;
            pcs.reset();
            player.jumps = 0;
        }
    } else {
        
        //This also starts restarts the program after a game over
        gameOver = false;
        start();
        
    }
    
}