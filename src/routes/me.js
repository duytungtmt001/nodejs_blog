const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/movies', meController.storedMovies);
router.get('/stored/blogs', meController.storedBlogs);

module.exports = router;
