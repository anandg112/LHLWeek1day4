var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
//library --> tracks --> playlists --> playlistTracks
  var playlists = library.playlists;
  var results = "";

  for(var key in playlists) {
    var id = playlists[key].id;
    var name = playlists[key].name;
    var tracks = playlists[key].tracks;
    results += id + ":" + name + " - " + tracks.length + " tracks" + '\n';
  }
    console.log(results);
}
printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {

  var tracks = library.tracks;
  var results = "";

  for(var key in tracks) {
    var id = tracks[key].id;
    var name = tracks[key].name;
    var artist = tracks[key].artist;
    var album = tracks[key].album;

    results += id + ": " + name + " by " + artist + " " + '(' + album + ')' + '\n';
  }
  console.log(results);
}
printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlists = library.playlists;
  var tracks = library.tracks;
  var results = "";
  for(var key in playlists){
    if(playlists[key].id === playlistId) {
      results = playlists[key].id + ":" + playlists[key].name + " - " + playlists[key].tracks.length + " tracks" + '\n';
    }
    // for(var key in tracks){
    //   if(tracks[key].id === playlists[key].tracks[i]) {

    //   }
    // }
  }
  console.log(results);
}
printPlaylist('p01');


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
//   var userId = uid();
//   var tracks = library.tracks;
//   tracks.userId.push({
//     userId,
//     name,
//     artist,
//     album
//   });
//   console.log(tracks);
}
//  addTrack();


// adds a playlist to the library

var addPlaylist = function (name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}