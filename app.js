const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const limiter = require('./utils/rateLimit');
const router = require('./routes');
// const { login, createUser } = require('./controllers/users');
// const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');
const centralErrHandler = require('./middlewares/centralErrHandler');
const { URL_MONGOOSE } = require('./utils/constans');

const { PORT = 3000, NODE_ENV, URL_MONGOOSE_PROD } = process.env;

const app = express();

mongoose.connect(NODE_ENV === 'production' ? URL_MONGOOSE_PROD : URL_MONGOOSE);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(cors);

// app.post('/signin', celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required(),
//   }),
// }), login);

// app.post('/signup', celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required(),
//     name: Joi.string().required().min(2).max(30),
//   }),
// }), createUser);

// app.use(auth);

app.use(limiter);

app.use(helmet());

app.use(router);

app.use(errorLogger);

app.use(errors());

// app.use((err, req, res, next) => {
//   const { statusCode = 500, message } = err;
//   res
//     .status(statusCode)
//     .send({
//       message: statusCode === 500
//         ? 'На сервере произошла ошибка'
//         : message,
//     });
//   next();
// });

app.use(centralErrHandler);

app.listen(PORT, () => {
  console.log(`start server on port ${PORT}`);
});
