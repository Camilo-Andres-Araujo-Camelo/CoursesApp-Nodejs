const CourseServices = require('../services/courseServices')


const getAllCourses = async (req, res) => {
  try {
    const result = await CourseServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCoursesInfo = async (req, res) => {
  try {
    const result = await CourseServices.getWithCategoriesAndVideos();
    res.json({
      message: "Enviando cursos con categorias y videos",
      data: result,
  });  
  } catch (error) {
    res.status(400).json(error.message)
  }
};

const createCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CourseServices.create( newCourse );
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await CourseServices.update(field, id)
    res.status(200).json(result)
} catch (error) {
    res.status(400).json(error.message)
}  
};

module.exports = {
  getAllCourses,
  getCoursesInfo,
  createCourse,
  updateCourse
}
