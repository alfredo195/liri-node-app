require("dotenv").config();

var request = require("request");
var fs = require('fs');

// keys
var keys = require("./keys.js");

//spotify
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//input command for gitbash
var userOption = process.argv[2]; 
var text = process.argv[3]

//switch
function userInputs (userOption, text) {
    switch(userOption) {
        case "concert-this":
            concerts(text)
            break;
        case "spotify-this-song":
            spotify(text)
            break;
        case "movie-this":
            movies(text)
            break;
        case "do-what-it-says":
            doWhat(Text)
            break;
    }
}

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
//concerts
function concerts (text){
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    request(queryUrl, function(error, response, body){
        
    })
}

// spotify
function spotify() {

}
//movies
//doWhat