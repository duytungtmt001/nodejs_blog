const express = require('express');
const router = express.Router();

const moviesController = require('../app/controllers/MovieController');

router.get('/create', moviesController.create);
router.post('/store', moviesController.store);
router.get('/:id/edit', moviesController.edit);
router.delete('/:id', moviesController.delete);
router.patch('/:id/restore', moviesController.restore);
router.put('/:id', moviesController.update);
router.get('/:slug', moviesController.show);

module.exports = router;
