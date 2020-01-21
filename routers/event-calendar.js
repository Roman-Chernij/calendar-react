const express = require('express');
const router = express.Router();
const { getCalendar } = require('../controllers/event-calendar');

router.get('/month', getCalendar);

router.get('/day', getCalendar);

router.get('/year', getCalendar);

module.exports = router;
