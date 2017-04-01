function Platform() {
    
    //Variables for a platform
    this.x = random(10, 750);
    this.y = random(0, 500);
    this.width = random(50, 300);
    this.height = 10;
    this.velX = random(3, 4);
    
    //Update the platform
    this.tick = function() {
       
        //Add movement to the platform
        this.x -= this.velX;
        
        
        //This is to create a wrap-around for the platforms
        if(this.x < 0 - this.width) {
          
            //We move them to the other side of the window
            this.x = 750 + this.width;  
            
        }
    };
    
    //Display the platform
    this.disp = function() {
     
        rect(this.x, this.y, this.width, this.height);
        
    };
    
    //Getters for the platform
    this.getX = function() {
        
     return this.x;   
        
    }
    
    this.getY = function() {
        
     return this.y; 
        
    }
    
    this.getWidth = function() {
        
     return this.width; 
        
    }
    
    this.getHeight = function() {
     
        return this.height;
        
    }
}