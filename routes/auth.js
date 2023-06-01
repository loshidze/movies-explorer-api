const authRouter = require('express').Router();
const {
  validationLogin,
  validationCreateUser,
} = require('../middlewares/validation');
const {
  createUser,
  login,
} = require('../controllers/users');

authRouter.post('/signup', validationCreateUser, createUser);
authRouter.post('/signin', validationLogin, login);

module.exports = authRouter;
