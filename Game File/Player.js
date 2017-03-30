function Player() {
    //We need to declar and initialize variables for the player
    this.x = 100;
    this.y = 100;
    //I just choose 100 for now, we'll have to change this later
    this.velX = 0;
    
    
    
    //Update values for the player
    this.tick = function(world) {
        
        //This is to add movement to the player
        this.y += velY;
        
        //We also need some gravity
        if(velY > 0) {
        //we should play around with this number
         velY -= 0.1;  
        
        }
        
        //We will also need to see if the player is on a platform
        //and stop them from falling through
        //I don't think this would work..
        if(world.isOn(this.x, this.y)) {
         velY = 0;   
        }
        
    };
    
    //Draw player to screen
    this.disp = function() {
    //We should decide on a size for the player later    
     rect(x, y, 50, 50);   
    };
}
