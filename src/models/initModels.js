const User = require('./user.models');
const Course = require('./course.models');
const UserCourse = require('./userCourse.models');
const Video = require('./video.models');
const Category = require('./category.models');
const CourseCategory = require('./courseCategory.models');

const initModels = () => {

  UserCourse.belongsTo(User, { as: 'user', foreignKey: 'user_id' });
  User.hasMany(UserCourse, { as: 'courses', foreignKey: 'user_id' });

  UserCourse.belongsTo(Course, { as: 'course', foreignKey: 'course_id' });
  Course.hasMany(UserCourse, { as: 'users', foreignKey: 'course_id' });

  CourseCategory.belongsTo(Course, { as: 'course', foreignKey: 'course_id' });
  Course.hasMany(CourseCategory, { as: 'categorys', foreignKey: 'course_id' });

  CourseCategory.belongsTo(Category, { as: 'category', foreignKey: 'category_id' });
  Category.hasMany(CourseCategory, { as: 'courses', foreignKey: 'category_id'});

  Video.belongsTo(Course, { as: 'course', foreignKey: 'course_id' });
  Course.hasMany(Video, { as: 'videos', foreignKey: 'course_id' }); // bien
  
}


module.exports = initModels;