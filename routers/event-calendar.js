const express = require('express');
const router = express.Router();
const { getCalendar } = require('../controllers/event-calendar');

router.get('/', getCalendar);

module.exports = router;
