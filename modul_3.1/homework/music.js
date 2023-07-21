
// Create database
use music

// Create collections
db.createCollection("songs");
db.createCollection("artists");
db.createCollection("popular_songs");

// 1. Insert 10 data into the "Songs" collection
function insertSong(title, artist, album) {
  var song = {
    title: title,
    artist: artist,
    album: album
  };
  db.songs.insertOne(song);
}
var songsData = [
  { title: "Shape of You", artist: "Ed Sheeran", album: "÷" },
  { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
  { title: "Someone Like You", artist: "Adele", album: "21" },
  { title: "Happy", artist: "Pharrell Williams", album: "G I R L" },
  { title: "Billie Jean", artist: "Michael Jackson", album: "Thriller" },
  { title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera" },
  { title: "Hotel California", artist: "Eagles", album: "Hotel California" },
  { title: "Rolling in the Deep", artist: "Adele", album: "21" },
  { title: "Despacito", artist: "Luis Fonsi", album: "Vida" },
  { title: "Shape of My Heart", artist: "Sting", album: "Ten Summoner's Tales"}
];
for (var i = 0; i < songsData.length; i++) {
  insertSong(songsData[i].title, songsData[i].artist, songsData[i].album);
}


// 2. Insert 10 data into the "Artists" collection
db.artists.insertMany([
  {
    name: "Ed Sheeran",
    dob: ISODate("1991-02-17"),
    genres: ["Pop", "Folk"]
  },
  {
    name: "The Weeknd",
    dob: ISODate("1990-02-16"),
    genres: ["R&B", "Pop"]
  },
  {
    name: "Adele",
    dob: ISODate("1988-05-05"),
    genres: ["Pop", "Soul"]
  },
  {
    name: "Pharrell Williams",
    dob: ISODate("1973-04-05"),
    genres: ["Pop", "R&B"]
  },
  {
    name: "Michael Jackson",
    dob: ISODate("1958-08-29"),
    genres: ["Pop", "R&B"]
  },
  {
    name: "Queen",
    dob: ISODate("1970-06-27"),
    genres: ["Rock"]
  },
  {
    name: "Eagles",
    dob: ISODate("1971-02-18"),
    genres: ["Rock", "Country"]
  },
  {
    name: "Luis Fonsi",
    dob: ISODate("1978-04-15"),
    genres: ["Latin", "Pop"]
  },
  {
    name: "Sting",
    dob: ISODate("1951-10-02"),
    genres: ["Pop", "Rock"]
  },
  {
    name: "Elton John",
    dob: ISODate("1947-03-25"),
    genres: ["Pop", "Rock"]
  }
]);


// 3. Insert 10 data into the "Popular Songs" collection
db.popular_songs.insertMany([
  {
    title: "Bohemian Rhapsody",
    play_count: 900000,
    period: {
      start: ISODate("1975-01-01T00:00:00Z"),
      end: ISODate("1975-12-31T23:59:59Z")
    }
  },
  {
    title: "Rolling in the Deep",
    play_count: 750000,
    period: {
      start: ISODate("2011-01-01T00:00:00Z"),
      end: ISODate("2011-12-31T23:59:59Z")
    }
  },
  {
    title: "Uptown Funk",
    play_count: 850000,
    period: {
      start: ISODate("2014-01-01T00:00:00Z"),
      end: ISODate("2014-12-31T23:59:59Z")
    }
  },
  {
    title: "Thinking Out Loud",
    play_count: 700000,
    period: {
      start: ISODate("2015-01-01T00:00:00Z"),
      end: ISODate("2015-12-31T23:59:59Z")
    }
  },
  {
    title: "Stairway to Heaven",
    play_count: 800000,
    period: {
      start: ISODate("1971-01-01T00:00:00Z"),
      end: ISODate("1971-12-31T23:59:59Z")
    }
  },
  {
    title: "Shape of My Heart",
    play_count: 600000,
    period: {
      start: ISODate("1993-01-01T00:00:00Z"),
      end: ISODate("1993-12-31T23:59:59Z")
    }
  },
  {
    title: "Billie Jean",
    play_count: 950000,
    period: {
      start: ISODate("1983-01-01T00:00:00Z"),
      end: ISODate("1983-12-31T23:59:59Z")
    }
  },
  {
    title: "Smooth",
    play_count: 700000,
    period: {
      start: ISODate("1999-01-01T00:00:00Z"),
      end: ISODate("1999-12-31T23:59:59Z")
    }
  },
  {
    title: "Hey Jude",
    play_count: 850000,
    period: {
      start: ISODate("1968-01-01T00:00:00Z"),
      end: ISODate("1968-12-31T23:59:59Z")
    }
  },
  {
    title: "Hotline Bling",
    play_count: 750000,
    period: {
      start: ISODate("2015-01-01T00:00:00Z"),
      end: ISODate("2015-12-31T23:59:59Z")
    }
  }
]);
