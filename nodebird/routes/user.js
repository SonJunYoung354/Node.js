const express = require('express');
const { isLoggedIn } = require('./middlewares');
const { User } = require('../models');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, async ( req, res, next) => {
    try {
        const user =await User.findOne({ where: { id: req.user.id } });
        await user.addFollowing(parseInt(req.params.id, 10));
        res.send('success');
    } catch (error) {
        console.error(error);
        next(error);
    }
});
router.post('/:id/unfollow', isLoggedIn, async ( req, res, next) => {
    try {
        const user =await User.findOne({ where: { nick: req.params.id } });
        await user.removeFollower(parseInt(req.user.id));
        res.send('asdas');
        console.log('삭제됨');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.patch('/:nick', isLoggedIn, async (req, res , next) => {
    try {
        const user = await User.update({ nick: req.params.nick } , { where: { id: req.user.id } } );
        res.send('!!!sssssss');
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
router.post('/:id/unfollowee', isLoggedIn, async ( req, res, next) => {
    try {
        const user = await User.destroy({ where: { id: req.user.id } });
        res.send('asdasd');
    } catch (error) {
        console.error(error);
        next(error);
    }
  });
  router.get('/:file_name', function(req, res, next) {
  });
module.exports = router;