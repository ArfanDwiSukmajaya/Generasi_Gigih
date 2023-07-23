const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.post('/post', (req, res) => {
    const movie = new Movie ({
        title : req.body.title,
        year : req.body.year
    })
    try{
        const movieToSave = movie.save();
        res.status(200).json({message : movieToSave, data : movie})
    }catch (e) {
        res.status(400).json({message : e.message})
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    }catch (e) {
        res.status(400).json({message : e.message})
    }
})


router.get('/get/:id', async  (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.json(movie)
    }catch (e) {
        res.status(400).json({message : e.message});
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateMovieData = req.body;
        const options = {new : true}

        const result = await Movie.findByIdAndUpdate(id, updateMovieData, options);
        res.send(result);
    }catch (e) {
        res.status(400).json({message : e.message})
    }
})


router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteMovieData = await Movie.findByIdAndDelete(id);
        res.send(`Movie with title ${deleteMovieData.title} has been deleted`);
    }catch (e) {
        res.status(400).json({message : e.message})
    }
})


module.exports = router;
