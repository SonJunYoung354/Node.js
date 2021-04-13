const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggenIn, isNotLoggendIn } = require('./middlewares');
const { User } = require('../models');

const router = express.Router();

router.post('/join', isLoggenIn, async  (req, res , next) => {
    const { email, nick, password } = req.body;
    try {
        const exUser = await User.find({ where : { email } });
        if(exUser){
            req.flash('joinError', '이미 가입된 이메일 입니다.');
            return res.redirect('/join');
        }
        const hash = await bcrypt.hash(passport, 12);
        await User.create({ 
            email,
            nick,
            password: hash,
        });
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return next(error);
    }
});


router.post('/login', isLoggenIn, (req,res,next) => {
    passport.authenticate('local', (authError, user , info) => {
        if(authError) {
            console.error(authError);
            return next(authError);
        }
        if(!User){
            req.flash('loginError', info.message);
            return req.redirect('/');
        }
        return req.login(user, (loginError) => {
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req,res,next);
});

router.get('/logout', isLoggenIn, (req,res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;