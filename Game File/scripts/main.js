//Declaring variables for object to 
//be used in program
var pcs;
var player;
var world;
var back;

//This is the setup function P5 uses to set up the program
//before drawing anything
function setup() {
    
    //Initializing objects
    //pcs = new PCS();
    player = new Player();
    world = new World();
    back = new Background();
    
    
    //Creating canvas for graphics and setting background color
    createCanvas(750, 500);
    background(back.getR(), back.getG(), back.getB());

	

}

//This is the draw function that will be continuously 
//called to run the program
function draw() {
    
    //We go through everything by importance
    //and how we want to layer the graphics
    
    tick();
    background(back.getR(), back.getG(), back.getB());
    //PCS.disp();
    world.disp();
    player.disp();
}


//This function will be used to update all
//the parts of the program
function tick() {
 
    //pcs.tick();
    player.tick(world);
    world.tick();
    back.tick();
    
}


//This will handle key events so the user
//can interact with the program
function keyPressed() {
    
    //The player will jump
    player.jump();
    
}
