const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, deleteProfile } = require('../controllers/profile');

router.get('/', getProfile);
router.patch('/', updateProfile);
router.delete('/', deleteProfile);


