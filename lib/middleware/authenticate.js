const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */

  try {
    const { session } = req.cookies;

    const payload = jwt.verify(session, process.env.thisisthesecretjwtjwt);

    req.user = payload;

    next();
  } catch (error) {
    error.message = 'You must sign in.';
    error.status = 401;
    next(error);
  }
};
