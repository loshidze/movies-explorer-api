const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const undefinedPathRouter = require('./undefinedPath');

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/*', undefinedPathRouter);

module.exports = router;
