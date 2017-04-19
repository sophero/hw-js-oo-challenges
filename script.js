// Question One //

function Multiplier() {
	this.currentVal = 1;
	this.multiply = function(num) {
		this.currentVal *= num;
		return this.currentVal;
	}
	this.getCurrentValue = function() {
		return this.currentVal;
	}
}

var multiplier = new Multiplier();

console.log(multiplier.multiply(8));
console.log(multiplier.multiply(8));
console.log(multiplier.multiply(8));
console.log(multiplier.multiply(8));
console.log(multiplier.getCurrentValue());


// Question Two //