module.exports = (error, req, res, next) => {
  console.log('#### Error handler');
  console.log(error);

  res.sendStatus(500);
};
