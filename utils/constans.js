const regExUrl = /^https?:\/\/(?:[\w-]+\.)+[a-z]{2,}(?:\/\S*)?$/i;

const URL_MONGOOSE = 'mongodb://127.0.0.1:27017/moviesdb';
const JWT_SECRET_DEV = 'dev-secret';

module.exports = {
  regExUrl,
  URL_MONGOOSE,
  JWT_SECRET_DEV,
};
