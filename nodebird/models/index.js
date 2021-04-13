const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
   config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
// //User, Post 모델은 1:N 관계 
// has,Many
// belongTo 로 연결
// 시퀄라이즈는 post에 userid 컬럼을 추가
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
// Post와 hashtag는N:M 관계 다대 다 관계 설립
// 게시글 하나는 여러개의 해시태그가 달릴수있고
// 해시태그 하나에 여러개의 게시글이 달릴 수 있음
db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
// 같은 테이블 끼리고 N:M 관계 가질수있음.
// 팔로잉 기능 -> 사용자 한명이 여러명의 팔로워를 가질수도 팔로잉 할수도 있음.
// as 옵션은 조인 작업시 사용하는 이름
db.User.belongsToMany(db.User, {
  foreignKey: 'followingId',
  as: 'Followers',
  through: 'Follow',
});
db.User.belongsToMany(db.User, { 
  foreignKey: 'followerId',
  as: 'Followings',
  through: 'Follow',
});

module.exports = db;