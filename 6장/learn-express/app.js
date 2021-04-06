var createError = require('http-errors');
var session = require('express-session');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


/**
 * express 패키지를 호출하여 app 변수 객체 생성
 * 변수에 각종 기능 연결
 */
var app = express();

// app.set 메서드로 익스프레스 앱을 설정할수있음
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function( req, res, next)  {
  console.log( req.url, '저도 미들웨어 입니다');
  next();
});


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieParser('secret code'));
app.use(session({ 
   resave: false,
   saveUninitialized: false,
   secret: 'secret code',
   cookie: {
     httpOnly: true,
     secure: false,
   },
}));
app.use(flash());
app.use('/', indexRouter);
app.use('/users', usersRouter);

//app.use('/img',exprsess.static(path.join(__dirname, 'public')));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//app 객체를 모듈로 만들었음.
module.exports = app;
