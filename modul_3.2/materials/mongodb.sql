show dbs;

db.movies.insertOne({"title" : "Stand By Me"});

db.movies.findOne();

db.movies.drop();

db.movies.insertMany(
    [
        {"title" : "Ghostbuster"},
        {"title" : "E.T"},
        {"title" : "Blade Runner"}
    ]
    )


db.movies.find();
//Removing Document
db.movies.deleteOne({"_id" : "64bb95263831190c641fe349"});

// delete semua document
db.movies.deleteMany({});


// Updateing Documnet
db.movies.updateOne({ "title" : "E.T"}, {"$set" : {"year" : 2004}});


// Array Operator
db.blogs.insertOne({
    "title" : "A blog post",
    "content " : "..."
})

db.blogs.findOne();

db.blogs.updateOne({"title" : "A blog post"},
    {"$push" : {"comments" :
                {"name" : "joe", "email" : "joe@gmail.com", "content" : "nice post" }
        }
    }
    )


//Indexing
for(var i = 0; i < 1000; i++){
    db.users.insertOne({
        "i" : i,
        "username" : "user" + i,
        "age" : Math.floor(Math.random() * 120),
        "created" : new Date()
    })
}
db.users.find({"username" : "user100"});
db.users.createIndex({"username" : 1})
db.users.find({"username" : "user1000"}).explain("executionStats")
db.users.find({"i" : 1000}).explain("executionStats")




// Aggregation
db.movies.insertMany([
    {"name" : "The Shawshank Redamtion", "genre" : "Drama", "gross" : 23341469},
    {"name" : "The God Father", "genre" : "Crime", "gross" : 12341469},
    {"name" : "Pull Fiction", "genre" : "Crime", "gross" : 21341469},
    {"name" : "Fight Club", "genre" : "Action", "gross" : 23241269},
    {"name" : "Inception", "genre" : "Sci-Fi", "gross" : 23241432},
])

db.movies.find();

db.movies.aggregate([
    {$match : {"genre" : 'Crime'}}
])

db.movies.find({"genre" : "Crime"})

// menggunakna match
db.movies.aggregate([
    {$match : {"genre" : {$in : ["Action", "Crime"]}}}
])

// menggunakna sort
db.movies.aggregate([
    {$sort : {"gross" : -1}}
])

db.movies.find();

// menggunkan group
db.movies.aggregate([
    {$group : {"_id" : "$name"}}
])

db.movies.aggregate([
    {
        $group : {
            "_id" : {
                "genre" : "$genre",
                "name" : "n$ame"
            }
        }
    }
])

db.movies.aggregate([
    {
        $group : {
            "_id" : {
                "genre" : "$genre",
                "name" : "$name",
            },
            "highest_gross" : {
                $max : "$gross"
            },
            "movie_name" : {
                $first : "$name"
            }
        }
    }
])


//Aggregation
db.movies.find();
