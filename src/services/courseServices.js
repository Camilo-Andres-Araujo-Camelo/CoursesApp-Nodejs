const Course = require('../models/course.models');
const CourseCategory = require('../models/courseCategory.models');
const Category = require('../models/category.models');
const Video = require('../models/video.models');

class CourseServices {

  static async getAll() {
    try {
      const result = await Course.findAll({
        attributes: {
          exclude: [ "createdAt", "updatedAt"]
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCategoriesAndVideos() {
    try {
      const result = await Course.findAll({
        attributes: {
          exclude: [ "createdAt", "updatedAt", 'categoryId']
        },
        include: [
          {
            model: CourseCategory,
            as: 'categorys',
            attributes: ['categoryId'],
            include: {
                model: Category,
                as: 'category',
                attributes: ['name']
              }
          },
          {
              model: Video,
              as: 'videos',
              attributes: ['title', 'url']
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create( newCourse ) {
    try {
      const result = await Course.create( newCourse )
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async update( field, id ) {
    try {
      const result = await Course.update( field, {where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }


  
};


module.exports = CourseServices;