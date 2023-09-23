const express = require('express');
const router = express.Router();

const moviesController = require('../app/controllers/MovieController');

router.get('/create', moviesController.create);
router.post('/store', moviesController.store);
router.get('/:slug', moviesController.show);

module.exports = router;
