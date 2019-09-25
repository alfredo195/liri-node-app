require("dotenv").config();
var axios = require("axios")
var moment = require("moment")
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
            default: 
            console.log("Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
}

// if statements
/* if (process.argv[2] === "spotify-this-song") {
    spotify()
} else if (process.argv[2] === "concert-this") {
    concerts()
} else if ( process.argv[2] === "movie-this") {
    movies()
}else if ( process.argv[2] === "do-what-it-says") {
    doWHat()
} */

// Functions 
//concerts
function concerts(text){
    var queryUrl = "https://rest.bandsintown.com/artists/" + text + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body) {
        // If the request is successful
        if (!error && response.statusCode === 200) {
            var concerts = JSON.parse(body);
            for (var i = 0; i < concerts.length; i++) {  
                console.log("**********EVENT INFO*********");  
                fs.appendFileSync("log.txt", "**********EVENT INFO*********\n");//Append in log.txt file
                console.log(i);
                fs.appendFileSync("log.txt", i+"\n");
                console.log("Name of the Venue: " + concerts[i].venue.name);
                fs.appendFileSync("log.txt", "Name of the Venue: " + concerts[i].venue.name+"\n");
            console.log("Venue Location: " +  concerts[i].venue.city);
            fs.appendFileSync("log.txt", "Venue Location: " +  concerts[i].venue.city+"\n");
            console.log("Date of the Event: " +  concerts[i].datetime);
            fs.appendFileSync("log.txt", "Date of the Event: " +  concerts[i].datetime+"\n");
            console.log("*****************************");
            fs.appendFileSync("log.txt", "*****************************"+"\n");
        }
    } else{
      console.log('Error occurred.');
    }
});}
// spotify
function spotify(text) {
    if( text === undefined){
        text = "The Sign";
    }
    spotify.search(
        {
            
        }
    )
}
//movies
//doWhat
userInputs(userOption,text)