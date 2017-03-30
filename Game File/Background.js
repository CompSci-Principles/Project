function Background() {

    //RGB Values for the background
    this.rValue = 0;
    this.gValue = 0;
    this.bValue = 0;
    
    //Update values for Background
    this.tick() = function() {
        
        //we'll see what this algorithm will yield
        rValue += 3;
        gValue += 2;
        bValue += 1;
    };
    
    //Getters for the RGB values
    this.getR = function() {
     
        return rValue;
        
    };
    
       this.getG = function() {
     
        return gValue;
        
    };
       
    this.getB = function() {
     
        return bValue;
        
    };
}
