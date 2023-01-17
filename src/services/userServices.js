const User = require('../models/user.models');
const UserCourse = require('../models/userCourse.models');
const Course = require('../models/course.models');

class UserServices {

  static async getById( id ) {
    try {
      const result = await User.findOne({
        where: { id },
        attributes: {
          exclude: [ 'password', 'createdAt', 'updatedAt']
        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async getCourses( id ){
    try {
      const result = await User.findOne({
        where: { id },
        attributes: {
          exclude: [ 'password', 'createdAt', 'updatedAt']
        },
        include: {
          model: UserCourse,
          as: 'courses',
          attributes: ['courseId'],
          include: {
            model: Course,
            as: 'course',
            attributes: ['title']
          }
        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async create( newUser ) {
    try {
      const result = await User.create( newUser );
      return result.toJSON();
    } catch (error) {
      throw error;
    }
  };

  static async update( fields, id ) {
    try {
      const result = await User.update( fields, {
        where: { id }
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async addCourse( newCourse ) {
    try {
      const { id, courseId } = newCourse;
      const course = Course.findByPk(courseId);
      const user = User.findByPk(id);
      if(user && course) {
        const result = await UserCourse.create( newCourse );
        return { isValid: true, result };
      }
      return { isValid: false };
    } catch (error) {
      throw error;
    }
  }

}


module.exports = UserServices;