function PCS() {
	//We need our variables
	
	this.health = 3;

	this.score = 0;
	//We want to make gitters for health and score
	this.getHealth = function() {
	
		
		return this.health; 
		
		
	};
    this.getScore = function() {
     
        
        return this.score;
        
    }
	
	this.damage = function(){
		this.health--;
		
	}
	
this.tick = function(){
	this.score+= 3;
	
	
	
};
	
	this.disp = function(){
		fill(0, 213, 224);
        noStroke();
		textSize(20);
		this.result = "Health: ";
		
		for(var x = this.health; x > 0; x--) {
			
			this.result += "♥"
			
		}
		text(this.result, 50, 10, 1000, 1000);
		textSize(100);
		text(this.score, 500/2, 400/2, 1000, 1000);
	}
}
