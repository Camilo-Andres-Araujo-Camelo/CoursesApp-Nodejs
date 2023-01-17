const { Router } = require('express');
const {
  getUserById,
  getUserCourses,
  createUser,
  updateUser,
  addCourseToUser
} = require('../controllers/user.controller')

const router = Router();

router.get('/user/:id', getUserById); // Obtener usuario

router.get('/user/:id/courses', getUserCourses); // Obtener usuario con sus cursos

router.post('/user', createUser); // Crear usario

router.put('/user/:id', updateUser); // Actualizar usuario

router.post('/user/:id/:courseId', addCourseToUser); // Agregar curso a usuario

module.exports = router;