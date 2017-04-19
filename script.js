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

function Photo(filename, locationTaken) {
	this.filename = filename;
	this.locationTaken = locationTaken;
}

function Album(photoArray) {
	this.photos = photoArray;
	this.addPhoto = function(photo) {
		this.photos.push(photo);
	}
	this.listPhotos = function() {
		for (var k = 0; k < this.photos.length; k++) {
			console.log(this.photos[k]);
		}
	}
	this.accessPhotoByIndex = function(index) {
		console.log(this.photos[index]);
	}
}

