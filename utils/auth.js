const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/sign-in');
  } else {
    next();
  }
};

module.exports = withAuth;