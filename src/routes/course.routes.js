const { Router } = require('express');

const {
  getAllCourses,
  getCoursesInfo,
  createCourse,
  updateCourse
} = require('../controllers/course.controller')

const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses/cv', getCoursesInfo);

router.post('/course', createCourse);

router.put('/course/:id', updateCourse);


module.exports = router;