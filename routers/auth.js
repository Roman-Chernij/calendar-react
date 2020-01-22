const passport = require("passport");
const jwt = require('jsonwebtoken');
const config = require('config');

// router.get('/login', login);
//
// router.get('/login/google/callback', passport.authenticate("google"), loginGoogleCallback);
//
// module.exports = router;

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      const jwt_secret_key = config.get('jwt_secret_key')
      const jwt_time_live = config.get('jwt_time_live')
      const token = jwt.sign({
        userId: req.user._id,
        googleId: req.user.googleId
      }, jwt_secret_key, {expiresIn: jwt_time_live});
      res.redirect(`http://localhost:3000/login?token=${token}`);
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
