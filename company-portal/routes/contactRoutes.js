const express = require('express');
const { createContactMessage, getAllContactMessages, deleteContactMessage } = require('../controllers/contactController');
const router = express.Router();

router.post('/', createContactMessage);
router.get('/', getAllContactMessages);
router.delete('/:id', deleteContactMessage);

module.exports = router;
