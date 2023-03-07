
const passport = require('passport');
const Users = require('../models/userModel');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        Users.findOrCreate({ googleId: profile.id }, async (err, user) => {
            if (err) return cb(err, null);

            if (!user) {
                const newUser = {
                    username: profile.displayName,
                    email: profile.emails
                };

                await Users.create(newUser);
                const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3d' });
                return cb(null, {
                    success: true,
                    message: 'Successfully logged in',
                    token: "Bearer " + token,
                    newUser
                })
            }
        });
    }
));