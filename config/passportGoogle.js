
const passport = require('passport');
const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        Users.findOne({ googleId: profile.id }, async (err, user) => {
            if (err) return cb(err, null);
            if (!user) {
                const newUser = {
                    username: profile.displayName,
                    googleId: profile.id,
                    profile: profile.photos[0].value
                };
                const result = await Users.create(newUser);
                return cb(null, result)
            }
            return cb(null, user);
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    Users.findById(id, (err, user) => done(err, user))
})