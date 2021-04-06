router.get('/flash', function(req, res) {
  req.session.message = '세션 메시지';
  req.flash('message', 'flash 메시지');
  res.redirect('/users/flash/result');
});

router.get('/flash/result', function(req, res) {
  res.send(`${req.session.message} ${req.flash('message')}`);
});