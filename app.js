const express = require('express');
const passport = require("passport");
const { urlencoded, json } = require('body-parser');
require('./service/passport-google-oauth20');
// const authRouters = require('./routers/auth');
const eventCalendarRouters = require('./routers/event-calendar');
const profileRouters = require('./routers/profile');

const app = express();

app.use(require('morgan')('dev'));
app.use(urlencoded({extended: true}));
app.use(json());
app.use(require('cors')( {
  origin: true,
  methods: ['GET', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
  credentials: false,
  maxAge: 3600,
  optionsSuccessStatus: 200
}));

app.use(passport.initialize());
require('./routers/auth')(app);
app.use('/api/calendar', eventCalendarRouters);
app.use('/api/profile', profileRouters);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// } else {
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
//   });
// }
module.exports = app;
