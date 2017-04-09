/*
    DESCRIPTION: This class handles the generation, computation, and displaying of points for a game system using the p5.js libraries.
    
    Notes:
        Name: scripts/PCS.js
        Authors: Dylan Powell, John S. Samuels, II
        Date: 4/9/2017
*/

function PCS() {
	//We need our variables
	
	this.health = 3;
	this.score = 0;
    this.highScore = 0;
    
    
	//We want to make getters for health and score
	this.getHealth = function() {
	
		
		return this.health; 
		
		
	};
    
    this.getScore = function() {
     
        
        return this.score;
        
    }
    
    this.getHighScore = function() {
     
        //This is used to set the highscore when the current score is greater than the previous score
        if(this.score > this.highScore) {
         
            this.highScore = this.score;
            
        }
        return this.highScore;
        
    }
	
    //This is the damage function, for when the player loses a life
	this.damage = function(gameOn){
        
        //This checks if the user is playing
		if(gameOn) {
            
        this.health--;
            
        }
		
	}
	
    
    //This is for increasing the score
    this.tick = function(gameOn){

        //This checks if the user is playing
        if(gameOn) {
            
        this.score+= 3;
            
        }
        
    };
    
    //This function resets the current score and health
    this.reset = function() {

        this.score = 0;
        this.health = 3;
        
    }
	
    //This is for displaying everything
	this.disp = function(gameOn){
        
        textFont("monospace");
        fill(0, 213, 224);
        noStroke();
        
        //This is to display if the player hasn't started to play
        if(!gameOn) {
            
            textSize(50);
            text("Press Any Key to Start", 70, 200, 1000, 1000);
            
        } else {
            //This is what is displayed when the game is currently being played
            textSize(20);
            this.result = "Health: ";
            
            //This is used to construct the health for the player
            for(var x = this.health; x > 0; x--) {

                this.result += "X"

            }
            text(this.result, 50, 10, 1000, 1000);
            text("High Score: " + this.getHighScore(), 50, 30, 1000, 1000)
            textSize(100);
            text(this.score, 500/2, 400/2, 1000, 1000);
        }
    };
}
