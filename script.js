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

var seneca = new Photo("seneca-1.jpg", "Philadelphia, PA");
var portHills = new Photo("Port_Hills_on_fire_15_feb.jpg", "Christchurch, New Zealand");
var harrisonsBight = new Photo("jack-harrisons-bight-3.jpg", "Harrison's Bight, New Zealand");

var myAlbum = new Album([seneca, portHills]); 

myAlbum.listPhotos();
myAlbum.addPhoto(harrisonsBight);
myAlbum.viewPhotoByIndex(2);
 
function Photo(filename, locationTaken) {
	this.filename = filename;
	this.locationTaken = locationTaken;
}

function Album(photoArray) {
	this.photos = photoArray;
	this.addPhoto = function(photo) {
		this.photos.push(photo);
		console.log(photo.filename + " added to album");
	}
	this.listPhotos = function() {
		for (var k = 0; k < this.photos.length; k++) {
			console.log(this.photos[k]);
		}
	}
	this.viewPhotoByIndex = function(index) {
		console.log(this.photos[index]);
	}
}


// Question Three //

function Person(fname, lname, age) {
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	this.fullName = function() {
		return this.fname + " " + this.lname;
	}
}

function Student(fname, lname, age, school) {
	this.isStudying = true;
	Person.apply(this, arguments);
	this.school = school;
}

function Teacher(fname, lname, age, school) {
	this.isTeaching = true;
	Person.apply(this, arguments);
	this.school = school;
}

function School(name, studentArray, teacherArray) {
	this.name = name;
	this.students = studentArray;
	this.teachers = teacherArray;
}