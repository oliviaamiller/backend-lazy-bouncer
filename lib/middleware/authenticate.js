const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */

  try {
    const cookie = req.cookies[process.env.COOKIE_NAME];

    if (!cookie) throw new Error('You must be signed in to continue');

    const user = jwt.verify(cookie, process.env.JWT_SECRET);

    req.user = user;

    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};
