/*
    DESCRIPTION: This class acts as a class-object for a single platform, and handles the generation and movement of a platform object.
    
    Notes:
        Name: scripts/Platform.js
        Author: John S. Samuels, II
        Date: 4/9/2017

*/

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
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        
    };
    
    //This is for generating a platform with new characteristcs
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