// The text to put in the div
var text;
// The array of movies
var arr = [];
var movieArray;

// A movie object
function Movie(title, year) {
	this.title = title;
	this.year = year;
}

// The display method
Movie.prototype.display = function() {
	text = this.title + " " + this.year;
	return text;
};

// When the document loads call the following functions
function setup() {
	loadSample();
	getDataFromLocalStorage();
	displayMovies();
	putInLocalStorage();
}

// The function to load the movies from local storage into the array
function loadSample() {
	// Instantiate some movies and call display()
	var movie1 = new Movie("Star Wars", "2015");
	movie1.display();

	var movie2 = new Movie("Indiana Jones", "1995");
	movie2.display();


	// Push to the array
	arr.push(movie1);
	arr.push(movie2);

	// For testing purposes:
	// Stringify a created object
	text = JSON.stringify(arr);
	document.getElementById("test2").innerHTML = text;
}

function getDataFromLocalStorage() {

	// Test for local storage
	if (typeof(Storage) !== "undefined")
	{
 	 // TODO: Put all local storage code here
	}
	else 
	{
		// TODO: Come up with a more elegant solution here
   	  document.getElementById("results1").innerHTML = "Sorry, Local Storage is not supported by your browser";
	}

	// Put the array in local storage
	localStorage.setItem("movieArray", text);

	// Get the array from local storage
	var object = localStorage.getItem("movieArray");
	// ***NOTE: movieArray is basically arr from above
	movieArray = JSON.parse(object);
}

// Display all of the movies in the movie array
function displayMovies() {
	var test = "";
	for (var i = 0; i < movieArray.length; i++) {
	  test += movieArray[i].title + "<br/>";
	  //test += movieArray[i].display();
	}

	document.getElementById("test3").innerHTML = test;
}

// Put the array (with any changes made in the session) in local storage
function putInLocalStorage() {
	text = JSON.stringify(movieArray);
	localStorage.setItem("movieArray", text);
}