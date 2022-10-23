/* Import-uri */
const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const secretKey = "dnsjinoq12321eni1ew!#@!#321";

const usersCollection = require("../user/user.schema");

/* Passport - JWT Strategy */
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretKey,
    },
    function (jwtPayload, done) {
      return usersCollection
        .findById(jwtPayload.data._id)
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);
