const User = require('../models/UsersModel');
const LocalStrategy = require('passport-local').Strategy;


module.exports = function(passport) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
    },async (email, password, done) => {
        try{
            const user = await User.findOne({email}).select('+password');;
            if(!user){
                return done(null, false, {message: 'No user with that email'});
            }
    
            const isMatch = await user.matchPassword(password);
            if(!isMatch){
                return done(null, false, {message: 'Incorrect password'})
            }
    
            done(null,user);
        }catch(err){
            console.log(err);
            done(err);
        }
    }
    
    ))
    
    passport.serializeUser((user, done) => {
        // console.log('serialize',user)
        done(null, user._id);
    });
    
    passport.deserializeUser(async (id, done) => {
        // console.log('deserialize',id)
        try{
            const user = await User.findById(id);
            done(null, user);
        }catch(err){
            done(err)
        }
    });
}
