/*
    DESCRIPTION: This class handles multiple platform objects.
    
    Notes:
        Name: scripts/World.js
        Author: John S. Samuels, II
        Date: 4/9/2017

*/

function World() {
    //We need to declare and initialize variables for the world   
    this.platforms = [];
    this.count = 10;
    
    //This is to initialize all of the elements in the
    //platforms array with platform objects
    for(var x = 0; x < this.count; x++) {
        
        this.platforms.push(new Platform());
        
    }
    
    //This is to Update values for the World
    this.tick = function() {
        
        //We cycle through all of the platforms
        for(var x = 0; x < this.count; x++) {
            
            //We update each platform object 
            this.platforms[x].tick();
            
        }
        
    };
    
    //This is to see if an object is touching any of the platforms
    this.isOn = function(x, y, boxWidth, boxHeight) {
        
        //This is the return value
        this.result = false;
        
        //We cycle through all of the platforms
        for(var i = 0; i < this.count; i++) {
    
            //If the object is within the x boundaries and close enough to the platform, it is touching the platform
            if(x >= this.platforms[i].getX() && ((x + boxWidth) < (this.platforms[i].getX() + this.platforms[i].getWidth()))) {
                if(this.platforms[i].getY() - (y + boxHeight) < 3 && this.platforms[i].getY() - (y + boxHeight) > -3) {

                    this.result = true;
                    break;
                }
            }
        }
        
        //return the result
        return this.result;
    };
    
    //This is to draw all of the platforms
    this.disp = function() {
     
            //We cyle through all of the elements
            for(var x = 0; x < this.count; x++) {
                
                //We display them
                this.platforms[x].disp();
                
            }
        
    };
    
}
