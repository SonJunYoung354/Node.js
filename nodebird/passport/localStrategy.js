const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');

//  LocalStrategy 첫번째 인자로 주어진 객체는 전략에 관한 설정
// req.body.email
// req.body.password 에 맞는 필드 객체 생성
module.exports = (passport) => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        // 실제 전략을 수행하는 함수는  async
        // LocalStrategy 의 두번째 인자로 들어감.
        // 위에 넣어준 email, password 는 async 의 1,2번째 매게변수가 되는것.
        // 3번째 매게변수 done passport.authenticate의 콜백함수
    }, async (email, password, done) => {
     try {
         const exUser = await User.find({ where: { email } });
         if (exUser){
             const result = await bcrypt.compare(password, exUser.password);
             if (result){
                 done(null , exUser);
             } else {
                 done(null, flase, { message : '비밀번호가 일치하지 않습니다.' });
             } 
         } else {
             done(null, false, { message : '가입되지 않은 회원입니다.' });
         }
     } catch (error){
         console.error(error);
         done(error);
     }
    }));
};