const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/multer');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const upload = multer(uploadConfig);
const routes = new express.Router();

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;
