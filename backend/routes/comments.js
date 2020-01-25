const express = require('express');
const router = express.Router();
const { validateComment } = require('../models/comment');

//add new comment
router.post('/', async (req, res) => {
  const Comment = res.locals.models.comment;
  const { error } = validateComment(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  let comment = new Comment(req.body);
  await comment.save();

  res.send(comment);
});

//get all comments
router.get('/', async (req, res) => {
  const Comment = res.locals.models.comment;
  const comment = await Comment.find();
  res.send(comment);
});

module.exports = router;
