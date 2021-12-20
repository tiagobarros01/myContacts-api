const CORS_BASENAME = 'Access-Control';

const allowedMethods = {
  'Allow-Origin': 'http://localhost:3000',
  'Allow-Methods': '*',
  'Allow-Headers': '*',
  'Max-Age': '10',
};

module.exports = (_req, res, next) => {
  for (const method in allowedMethods) {
    if (Object.prototype.hasOwnProperty.call(allowedMethods, method)) {
      res.setHeader(`${CORS_BASENAME}-${method}`, allowedMethods[method]);
    }
  }

  next();
};
