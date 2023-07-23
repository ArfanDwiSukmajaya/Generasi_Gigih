const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title : {
        require : true,
        type : String
    },
    year : {
        require: true,
        type : Number
    }
})
module.exports = mongoose.model('Movie', movieSchema);

