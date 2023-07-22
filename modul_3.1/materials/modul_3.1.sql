-- create database
use video

--  create collection
db.movies

--  variabel untuk menyimpan data movie
movie = {
    "title" : "Bad Boys",
    "directur" : "John",
    "year" : 2006
}
-- insert movie
db.movies.insertOne(movie);

--  menampilkan data
db.movies.find();

--  update menambahkan dokument reviews
db.movies.updateOne( {title : "Bad Boys"}, {$set : {reviews : []}})

--  menampilkan data
db.movies.find().pretty();

// menghapus dokeument dengan title : Bad Boys
db.movies.deleteOne({title : "Bad Boys"})