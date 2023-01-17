const { Router } = require('express');
const {
  createVideo,
  deleteVideo
} = require('../controllers/video.controller')

const router = Router();

router.post('/video', createVideo);

router.delete('/video/:id', deleteVideo);

module.exports = router;