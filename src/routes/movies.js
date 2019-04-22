const { Router } = require('express')
const router = Router();

const _ = require('underscore')

//const movies = require('../ejemplo.json');

router.get('/', (req, res) => {

    res.json(movies);
});

router.post('/', (req, res) => {
    const { Tittle, Director, Actors } = req.body;
    if (Tittle && Director && Actors) {
        const id = movies.length + 1;
        const newMovie = { id, ...req.body };
        movies.push(newMovie);
        res.json(movies);
    }
    else {
        res.status(500).json({ error: "An error has occurred" });
    }
    res.send('recibido');
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    })
    res.send(movies);
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { Tittle, Director, Actors } = req.body;
    if (Tittle && Director && Actors) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.Tittle = Tittle;
                movie.Director = Director;
                movie.Actors = Actors;
            }
        });
        res.json(movies);
    }
    else{
        res.status(500).json({ error: "An error has occurred" });
    }
})

module.exports = router;