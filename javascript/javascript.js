// The text to put in the div
var text;
// The array of movies
var arr = [];
var movieArray;

//send to search through ajax
function searchInput(str){
	//Sending the input to search.php and retrieving the output...
       
	var request=new XMLHttpRequest();
	request.onreadystatechange=function()
  {
  if (request.readyState==4 && request.status==200 )
    {
    document.getElementById("results").innerHTML=request.responseText;
    }
  }
	request.open("GET","search.php?str="+str,true);//Sending input using get method...
	request.send();
}

// A movie object
function Movie(title, year, rating, genre) {
	this.title = title;
	this.year = year;
	this.rating = rating;
	this.genre = genre;
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
	var movie1 = new Movie("Star Wars", "2015", "PG", "Sci-Fi");
	movie1.display();

	var movie2 = new Movie("Indiana Jones", "1995", "PG", "Action");
	movie2.display();

	var movie3 = new Movie("Pride and Prejudice", "2006", "PG", "Romance");
	movie2.display();

	// Push to the array
	arr.push(movie1);
	arr.push(movie2);
	arr.push(movie3);

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
	var test = "<table><tr><th>Title</th><th>Year</th><th>Genre</th><th>Rating</th></tr>";
	for (var i = 0; i < movieArray.length; i++) {
		test += "<tr>"
	    test += "<td>" + movieArray[i].title + "</td><td>" + movieArray[i].year + "</td><td>" + movieArray[i].rating + "</td><td>" + movieArray[i].genre + "</td></tr>";
	  //test += movieArray[i].display();
	}

	document.getElementById("test3").innerHTML = test;
}

// Adds a movie to the array 
function addMovie() {

}

// Sort movies
function sortMovies() {

}

// Put the array (with any changes made in the session) in local storage
function putInLocalStorage() {
	text = JSON.stringify(movieArray);
	localStorage.setItem("movieArray", text);
}
