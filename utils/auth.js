const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    console.log('User is not logged in. Redirecting to /sign-in');
    res.redirect('/sign-in');
  } else {
    console.log(
      'User is logged in. Proceeding to the next middleware or route.'
    );
    next();
  }
};

module.exports = withAuth;
