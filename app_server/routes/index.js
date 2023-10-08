const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/home');
const ctrlOthers = require('../controllers/others');

/* Home page */
router.get('/', ctrlHome.homeMenu);

/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;
