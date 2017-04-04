function PCS() {
	//We need our variables
	
	this.health = 3;
	this.score = 0;
    this.highScore = 0;
    
    
	//We want to make gitters for health and score
	this.getHealth = function() {
	
		
		return this.health; 
		
		
	};
    
    this.getScore = function() {
     
        
        return this.score;
        
    }
    
    this.getHighScore = function() {
     
        if(this.score > this.highScore) {
         
            this.highScore = this.score;
            
        }
        return this.highScore;
        
    }
	
    //This is the damage function, for when the player loses a life
	this.damage = function(gameOn){
        
		if(gameOn) {
            
        this.health--;
            
        }
		
	}
	
    
    //This is for increasing the score
    this.tick = function(gameOn){

        if(gameOn) {
            
        this.score+= 3;
            
        }
        
    };
    
    this.reset = function() {

        this.score = 0;
        this.health = 3;
        
    }
	
    //This is for displaying the score and health
	this.disp = function(gameOn){
        
        textFont("monospace");
        fill(0, 213, 224);
        noStroke();
        
        if(!gameOn) {
            
            textSize(50);
            text("Press Any Key to Start", 70, 200, 1000, 1000);
            
        } else {
            textSize(20);
            this.result = "Health: ";

            for(var x = this.health; x > 0; x--) {

                //We need to find a different character, because this doesn't work on all computers
                this.result += "X"

            }
            text(this.result, 50, 10, 1000, 1000);
            text("High Score: " + this.getHighScore(), 50, 30, 1000, 1000)
            textSize(100);
            text(this.score, 500/2, 400/2, 1000, 1000);
        }
    };
}
