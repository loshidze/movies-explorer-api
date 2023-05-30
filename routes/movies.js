const moviesRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getSavedMovies,
  saveMovie,
  deleteMovie,
} = require('../controllers/movies');
const { regExUrl } = require('../utils/constans');

moviesRouter.get('/', getSavedMovies);
moviesRouter.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(regExUrl),
    trailerLink: Joi.string().required().regex(regExUrl),
    thumbnail: Joi.string().required().regex(regExUrl),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), saveMovie);
moviesRouter.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex(),
  }),
}), deleteMovie);

module.exports = moviesRouter;
