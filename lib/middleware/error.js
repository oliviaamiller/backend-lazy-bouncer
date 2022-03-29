/* eslint-disable no-console */

module.exports = (err, req, res) => {
  const status = err.status || 500;

  res.status(status);

  console.log(err);

  res.send({
    status,
    message: err.message,
  });
};
