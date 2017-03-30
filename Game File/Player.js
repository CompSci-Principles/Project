function Player() {
    //We need to declare and initialize variables for the player
    this.x = 100;
    this.y = 100;
    this.velY = 0;
    
    
    
    //Update values for the player
    this.tick = function(world) {
        
      //This is to add movement to the player
        this.y -= this.velY;
        
        //We also need some gravity
        //we should play around with this number
         this.velY -= 0.1;
        
        //This is what happends when you fall too far
        if(this.y > height) {
            
            //The player is teleported to the top
            this.y = 0 - 50; 
            
            //We also need some way to loose life once the player has fallen
        }
    }
        
        //We will also need to see if the player is on a platform
        //and stop them from falling through
        //I don't think this would work..
//        if(world.isOn(this.x, this.y)) {
//         velY = 0;   
//        }
//        
//    };
        
    //This is the method for making the player jump    
    this.jump = function() {
        
        //A velocity is added in the y direction
        this.velY = 5;   
        
    }
    
    //Draw player to screen
    this.disp = function() {
    //We should decide on a size for the player later    
     rect(this.x, this.y, 10, 10);   
    };
}
