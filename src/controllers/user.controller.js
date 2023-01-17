const UserServices = require('../services/userServices');


const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById( id );
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getCourses( id );
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create( newUser );
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    const result = await UserServices.update( fields, id );
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const addCourseToUser = async (req, res) => {
  try {
    const { id, courseId } = req.params;
    const newCourse = {
      userId: id,
      courseId
    }
    const result = await UserServices.addCourse( newCourse );
    if(result.isValid){
      res.json(result);
    } else {
      res.status(401).json({
        message: 'El curso o usuario ingresado no existe, verificar'
      });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}; /////////////////////////////////////


module.exports = {
  getUserById,
  getUserCourses,
  createUser,
  updateUser,
  addCourseToUser
};