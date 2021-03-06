/*
    DESCRIPTION: This class contains methods for creating and computing different RGB values using the p5.js libraries for use as a background color generator.
    
    Notes:
        Name: scripts/Background.js
        Author: John S. Samuels, II
        Date: 4/9/2017

*/

function Background() {

    //RGB Values for the background
    this.rValue = 30;
    this.gValue = 30;
    this.bValue = 30;
    
    //These are for the background algorithm
    this.rVal = 0.5;
    this.gVal = 0.10;
    this.bVal = 0.20;
    
    //Update values for Background
    this.tick = function() {
        
        //we'll see what this algorithm will yield
        //Each value will increment and decrement in this
        //algorithm to try and get all of the specturm
        
        if(this.rValue >= 255 || this.rValue < 30) {
            this.rVal *= -1;
        }
        
        if(this.gValue >= 255 || this.gValue < 30) {
            this.gVal *= -1;
        }
        
        if(this.bValue >= 255 || this.bValue < 30) {
            this.bVal *= -1;
        }
        
        //Update values
        this.rValue += this.rVal;
        this.gValue += this.gVal;
        this.bValue += this.bVal;
    };
    
    //Getters for the RGB values
    this.getR = function() {
     
        return this.rValue;
        
    };
    
       this.getG = function() {
     
        return this.gValue;
        
    };
       
    this.getB = function() {
     
        return this.bValue;
        
    };
}
