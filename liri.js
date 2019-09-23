require("dotenv").config();

// keys
var keys = require("./keys.js");

//spotify
var spotify = new Spotify(keys.spotify);

//input command for gitbash
var text = process.argv[3]

// if statements
if (process.argv[2] === "spotify-this-song") {
    spotify()
} else if (process.argv[2] === "concert-this") {
    concerts()
} else if ( process.argv[2] === "movie-this") {
    movies()
}else if ( process.argv[2] === "do-what-it-says") {
    doWHat()
}

// Functions 

// spotify
function spotify() {
    
}
//concerts
//movies
//doWhat