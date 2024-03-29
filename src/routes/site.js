const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/SiteController');

router.get('/search', newsController.search);
router.get('/', newsController.index);

module.exports = router;
