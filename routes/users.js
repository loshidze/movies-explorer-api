const usersRouter = require('express').Router();
const {
  getMyUser,
  updateUser,
} = require('../controllers/users');
const {
  validationUpdateUser,
} = require('../middlewares/validation');

usersRouter.get('/me', getMyUser);
usersRouter.patch('/me', validationUpdateUser, updateUser);

module.exports = usersRouter;
