const CORS_BASENAME = 'Access-Control-Allow-';

const allowedMethods = {
  Origin: 'http://localhost:3000',
  Methods: '*',
  Headers: '*',
};

module.exports = (_req, res, next) => {
  for (const method in allowedMethods) {
    if (Object.prototype.hasOwnProperty.call(allowedMethods, method)) {
      res.setHeader(`${CORS_BASENAME}${method}`, allowedMethods[method]);
    }
  }

  next();
};
