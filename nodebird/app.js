// 모듈 호출
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();
// 라우터 설정
const pageRouter = require('./routes/page');
const { sequelize } = require('./models');
// express 실행
const app = express();
sequelize.sync();

// pug 패키지 설정
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port',process.env.PORT || 8001);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.subscribe(express.urlencoded({ extended: false }));
// 쿠키 설정
// 비밀키 'nodebirdsecret' 는 직접 하드 코딩하지않고 별고 관리
// 관리해주는 패키지 dotenv
// 비밀키는 .env 파일에 모아둠
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({ 
    resave: false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie :{
        httpOnly: true,
        secure: false,
    },
}));
app.use(flash());
app.use('/', pageRouter);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.massage = err.massage;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), ' 번 대기중');
});
