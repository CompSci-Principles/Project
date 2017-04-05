function Platform() {
    
    //Variables for a platform
    this.x = random(-50, 750);
    this.y = random(0, 500);
    this.width = random(50, 200);
    this.height = 5;
    this.velX = random(3, 10);
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    
    //Update the platform
    this.tick = function() {
       
        //Add movement to the platform
        this.x -= this.velX;
        
        //This is to create a wrap-around for the platforms
        if(this.x < 0 - this.width) {
            this.generate();
          
            //We move them to the other side of the window
            this.x = 750 + this.width;  
            
        }
    };
    
    //Display the platform
    this.disp = function() {
        
        fill(this.r, this.g, this.b);
        //noFill();
        //stroke(255);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        
    };
    
    this.generate = function() {
        
        this.width = random(50, 200);
        this.height = 5;
        this.velX = random(3, 10);
        this.y = random(0, 500);
        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);

    }
    
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