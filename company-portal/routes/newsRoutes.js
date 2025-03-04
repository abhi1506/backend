const express = require('express');
const router = express.Router();
const { createNewsWithImages, getAllNews, getNewsById, deleteNews, upload, updateNewsById } = require('../controllers/newsController');
const { authorizeRoles, isAuthenticatedUser } = require('../middlewar/auth');

router.post('/news',isAuthenticatedUser, authorizeRoles('Admin'), createNewsWithImages);

router.get('/news', getAllNews);

router.get('/news/:id', getNewsById);
//router.put("/news/:id", upload.array("images"), updateNewsById);


router.delete('/news/:id',isAuthenticatedUser, authorizeRoles('Admin'), deleteNews);

module.exports = router;
