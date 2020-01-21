const passport = require("passport");

module.exports.login = async function(req, res) {
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
};

module.exports.loginGoogleCallback = async function(req, res) {
  res.redirect("/");
};
