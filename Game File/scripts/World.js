function World() {
    //We need to declare and initialize variables for the world   
    //create an array of platforms
    this.platforms = [];
    this.count = 5;
    for(var x = 0; x < this.count; x++) {
        this.platforms.push(new Platform());
    }
    
    //Update values for the World
    this.tick = function() {
        
        for(var x = 0; x < this.count; x++) {
            
        this.platforms[x].tick();
            
        }
        
    };
    
    //We will need to see if an object is on one of the platforms
    this.isOn = function(x, y, boxWidth, boxHeight) {
        
        this.result = false;
        
        for(var i = 0; i < this.count; i++) {
    
            //If the object is within the x boundaries and close enough to the platfrom, it is on
            if(x >= this.platforms[i].getX() && ((x + boxWidth) < (this.platforms[i].getX() + this.platforms[i].getWidth()))) {
                if(this.platforms[i].getY() - (y + boxHeight) < 3 && this.platforms[i].getY() - (y + boxHeight) > -3) {
                
                    this.result = true;
                
                }
            }
        }
        
        return this.result;
    };
    
    this.disp = function() {
     
            for(var x = 0; x < this.count; x++) {
        this.platforms[x].disp();
    }
        
    }
    
}
