const User = require('./user.models');
const Course = require('./course.models');
const UserCourse = require('./userCourse.models');
const Video = require('./video.models');
const Category = require('./category.models');
const CourseCategory = require('./courseCategory.models');
const CategoryVideo = require('./categoryVideo.models')

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

  CategoryVideo.belongsTo(Video, { as: 'video', foreignKey: 'video_Id' });
  Video.hasMany(CategoryVideo, { as: 'categories', foreignKey: 'video_Id' }); // bien

  CategoryVideo.belongsTo(Category, { as: 'category', foreignKey: 'category_Id' });
  Category.hasMany(CategoryVideo, { as: 'video', foreignKey: 'category_Id' }); // bien
  
}


module.exports = initModels;