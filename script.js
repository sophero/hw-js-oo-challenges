// Question One //

console.log("\n Question One");

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

console.log("\n Question Two");

var gallery = document.getElementsByClassName("gallery-container")[0];
console.log(gallery);

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
	this.url = 'images/' + filename;
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
	this.displayPhotos = function() {
		for (var k = 0; k < this.photos.length; k++) {
			var galleryItem = '<div class="gallery-item img' + k + '"></div>';
			gallery.innerHTML += galleryItem;
			// var imageDiv = getElementsByClassName("img" + k)[0];
			var imageDiv = document.getElementsByClassName("gallery-item")[k];
			imageDiv.style.backgroundImage = "url('" + this.photos[k].url + "')";
			// console.log(this.photos[k].url);
			// console.log(document.getElementsByClassName("gallery-item"));
		}
	}
}




// Question Three //

console.log("\n Question Three");

var john = new Person("John", "Smith", 52);
var sarah = new Student("Sarah", "Strawbridge", 11);
var briony = new Student("Briony", "Lightbody", 13);
var craig = new Teacher("Craig", "Robinson", 46);

var south = new School("South Intermediate", [sarah], [craig]);

var gillian = new Teacher("Gillian", "Trotter", 64, south);

console.log(john.fullName());

south.addStudent(briony);
south.addTeacher(craig);

gillian.assignGrade(sarah, 96);
gillian.assignHomework(sarah);

sarah.completeHomework();
sarah.giveApple(gillian);

craig.giveDetention(briony, 3);
briony.attendDetention();

south.listStudents();
south.listTeachers();


function Person(fname, lname, age) {
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	this.fullName = function() {
		return this.fname + " " + this.lname;
	}
}

function Student(fname, lname, age, school) {
	Person.apply(this, arguments);
	this.isStudying = true;
	this.numDetentions = 0;
	this.currentGrade;
	this.hasHomework = false;
	this.school = school;
	this.attendDetention = function() {
		this.numDetentions -= 1;
		console.log(this.fullName() + " attended detention and now has " + this.numDetentions + " detentions remaining.");
	}
	this.completeHomework = function() {
		this.hasHomework = false;
		console.log(this.fullName() + " has completed their homework.");
	}
	this.giveApple = function(teacher) {
		teacher.hasApple = true;
		console.log(this.fullName() + " gave " + teacher.fullName() + " an apple.");
	}
}

function Teacher(fname, lname, age, school) {
	Person.apply(this, arguments);
	this.isTeaching = true;
	this.school = school;
	this.hasApple = false;
	this.assignGrade = function(student, grade) {
		student.currentGrade = grade;
		console.log(this.fullName() + " assigned a grade of " + grade + " to " + student.fullName() + ".");
	}
	this.giveDetention = function(student, numDetentions) {
		student.numDetentions += numDetentions;
		console.log(this.fullName() + " gave " + student.fullName() + " " + numDetentions + " detentions.");
	}
	this.assignHomework = function(student) {
		student.hasHomework = true;
		console.log(this.fullName() + " assigned homework to " + student.fullName() + ".");
	}
}

function School(name, studentArray, teacherArray) {
	this.name = name;
	this.students = studentArray;
	this.teachers = teacherArray;

	for (var k = 0; k < studentArray.length; k++) {
		studentArray[k].school = this;
	}
	for (var k = 0; k < teacherArray.length; k++) {
		teacherArray[k].school = this;
	}
	this.listStudents = function() {
		for (var k = 0; k < this.students.length; k++) {
			console.log(this.students[k]);
		}
	}
	this.listTeachers = function() {
		for (var k = 0; k < this.teachers.length; k++) {
			console.log(this.teachers[k]);
		}
	}
	this.addStudent = function(student) {
		this.students.push(student);
		student.school = this;
		console.log(student.fullName() + " added to school " + this.name + ".");
	}
	this.addTeacher = function(teacher) {
		this.teachers.push(teacher);
		teacher.school = this;
		console.log(teacher.fullName() + " added to school " + this.name + ".");
	}
}














