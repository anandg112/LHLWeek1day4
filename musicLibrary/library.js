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
  var pList = library.playlists[playlistId];
  console.log(pList.id + ": " + pList.name + " - " + pList.tracks.length + " tracks" );
  var pTracks = pList['tracks'];
  for (var k in pTracks){
    var track = library.tracks[pTracks[k]];
    console.log(track.id + ": " + track.name + " by " + track.artist + ' (' + track.album + ')');
  }


}
printPlaylist('p02');


//adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var pList = library.playlists[playlistId];
  pList.tracks.push(trackId);
  console.log(pList.tracks);
}

addTrackToPlaylist("t01", "p02");
// generates a unique id
// (use this for addTrack and addPlaylist)
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var tracks = library.tracks;
  tracks["t04"] = {id: 't04', name: name, artist: artist, album: album};
  console.log(tracks);
}
 addTrack('Code Love', 'The codettes', 'From Russia with code');

// adds a playlist to the library

var addPlaylist = function (name) {
  var pList = library["playlists"];
  pList['p03'] = {id: 'p03', name: name, tracks:["t03", "t04"] };
  console.log(pList);
}

addPlaylist('Started from UNIX');


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}