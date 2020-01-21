const passportGoogleOauth20 = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require('../models/User');
const config = require('config');


passportGoogleOauth20.serializeUser((user, done) => {
  done(null, user.id);
});

passportGoogleOauth20.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passportGoogleOauth20.use(
  new GoogleStrategy(
    {
      clientID: config.get('google_client_id'),
      clientSecret: config.get('google_client_secret'),
      // callbackURL: `${config.get('app_url')}/login/google/callback`,
      callbackURL: `${config.get('app_url')}/auth/google/callback`,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken)
      // console.log('refreshToken', refreshToken)
      // console.log('profile', profile)
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // user already exists
        return done(null, existingUser);
      }

      // no such user, create a new record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
