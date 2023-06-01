const moviesRouter = require('express').Router();
const {
  getSavedMovies,
  saveMovie,
  deleteMovie,
} = require('../controllers/movies');
const {
  validationSaveMovie,
  validationDeleteMovie,
} = require('../middlewares/validation');

moviesRouter.get('/', getSavedMovies);
moviesRouter.post('/', validationSaveMovie, saveMovie);
moviesRouter.delete('/:movieId', validationDeleteMovie, deleteMovie);

module.exports = moviesRouter;
