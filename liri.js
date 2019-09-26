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
userInputs(userOption,text)

//switch
function userInputs (userOption, text) {
    switch(userOption) {
        case "concert-this":
            concerts(text)
            break;
        case "spotify-this-song":
            spotifY(text)
            break;
        case "movie-this":
            movies(text)
            break;
        case "do-what-it-says":
            doWhat(text)
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
function spotifY(text) {
    if( text === undefined){
        text = "The Sign";
    }
    spotify.search(
        {
            type: "track",
            query: text
            
        },
        function(err, data){
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log("**********SONG INFO*********");
                fs.appendFileSync("log.txt", "**********SONG INFO*********\n");
                console.log(i);
                fs.appendFileSync("log.txt", i +"\n");
                console.log("Song name: " + songs[i].name);
                fs.appendFileSync("log.txt", "song name: " + songs[i].name +"\n");
                console.log("Preview song: " + songs[i].preview_url);
                fs.appendFileSync("log.txt", "preview song: " + songs[i].preview_url +"\n");
                console.log("Album: " + songs[i].album.name);
                fs.appendFileSync("log.txt", "album: " + songs[i].album.name + "\n");
                console.log("Artist(s): " + songs[i].artists[0].name);
                fs.appendFileSync("log.txt", "artist(s): " + songs[i].artists[0].name + "\n");
                console.log("*****************************");  
                fs.appendFileSync("log.txt", "*****************************\n");
             }
        }
    )
}
//movies
function movies(text){
    if (text === undefined) {
        text = "Mr. Nobody"
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + text + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
    // If the request is successful
    if (!error && response.statusCode === 200) {
        var movies = JSON.parse(body);
        console.log("**********MOVIE INFO*********");  
        fs.appendFileSync("log.txt", "**********MOVIE INFO*********\n");
        console.log("Title: " + movies.Title);
        fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
        console.log("Release Year: " + movies.Year);
        fs.appendFileSync("log.txt", "Release Year: " + movies.Year + "\n");
        console.log("IMDB Rating: " + movies.imdbRating);
        fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");
        console.log("Country of Production: " + movies.Country);
        fs.appendFileSync("log.txt", "Country of Production: " + movies.Country + "\n");
        console.log("Language: " + movies.Language);
        fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
        console.log("Plot: " + movies.Plot);
        fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
        console.log("Actors: " + movies.Actors);
        fs.appendFileSync("log.txt", "Actors: " + movies.Actors + "\n");
        console.log("*****************************");  
        fs.appendFileSync("log.txt", "*****************************\n");
    } else{
      console.log('Error occurred.');
    }

});}
//doWhat
function doWhat(text){
	fs.readFile('random.txt', 'utf8', function(err, data){
		if (err){ 
			return console.log(err);
		}
        var dataArr = data.split(',');
        userInputs(dataArr[0], dataArr[1]);
	});
}
userInputs(userOption,text)
//spotifY(userOption,text)