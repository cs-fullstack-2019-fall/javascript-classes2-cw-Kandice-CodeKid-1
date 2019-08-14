// ### Exercise 1
// Create a Movie class. Make all the following attributes: movieName, rating, and yearReleased. Create three different methods to change each attribute. Outside of the class create two different Movie objects, assign values to each object, and print them to the console.
//



class Movie
{
    constructor(movieName, rating, yearReleased)
    {
        this.movie=movieName;
        this.rate=rating;
        this.releaseYear=yearReleased
    }
    // you should pass these methods a param to updae
    cngMovie()
    {
        this.movie=prompt('What is the name of the movie?');
    }
    cngRate()
    {
        this.rate=prompt('What is the ramovie rating?');
    }
    cngYear()
    {
        this.releaseYear=prompt("What year was the movie released?")
    }
    // printStuff()
    // {
    //     console.log("Movie: "+ this.movie +" Rating: "+ this.rate +" Release year: ")
    // }
}

let newMovie= new Movie("Moon and Stars","4 out of 5 stars", "2017")

newMovie.movie="green mile";
// movie is not a property of the class Movie
console.log(newMovie);
newMovie.movie="Batman";
// you should use the methods that you define in the class to update movie information 
console.log(newMovie);

// newMovie.printStuff();
// newMovie.printStuff();