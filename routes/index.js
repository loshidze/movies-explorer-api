const router = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
const undefinedPathRouter = require('./undefinedPath');
const authRouter = require('./auth');
const auth = require('../middlewares/auth');

router.use('/', authRouter);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/*', undefinedPathRouter);

module.exports = router;
