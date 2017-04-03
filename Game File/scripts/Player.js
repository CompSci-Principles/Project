function Player() {
    //We need to declare and initialize variables for the player
    this.x = 100;
    this.y = 100;
    this.size = 10;
    this.velY = 0;
    this.velLimit = -5;
    this.jumps = 0;
 
    
    
    //Update values for the player
    this.tick = function(world, pcs) {
        
        //This is to add forces to the player when they are in the air
        if(!(world.isOn(this.x, this.y, this.size, this.size)) || this.velY > 0) {
            
            //The player is to move in the direction of their velocity
            this.y -= this.velY;
            
            //We also want gravity, however we need to put a limit
            //on the player speeed to that they don't fall though
            //the platforms
            if(this.velY > this.velLimit) {
                
            this.velY -= 0.1;
                
            }

        } else {
            //This is to stop the player from going through platforms
            this.velY = 0;
            this.jumps = 0;
            
        }
        
        
        //This is what happends when you fall too far
        if(this.y > height) {
            
            //The player is teleported to the top
            this.y = 0 - 50; 
					
			//minus points
			pcs.damage();
            
            //We also need some way to loose life once the player has fallen
        }
    };
        
    //This is the method for making the player jump    
    this.jump = function() {
        
        if(this.jumps < 3) {
        //A velocity is added in the y direction
        this.velY = 5; 
        this.jumps ++;
        }
        
    };
    
    //Draw player to screen
    this.disp = function() {
        
        fill(171, 139, 249 );
        noStroke();
        rect(this.x, this.y, this.size, this.size); 
        
    };
}
