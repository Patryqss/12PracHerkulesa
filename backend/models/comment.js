const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
  },
  postdate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  avatar: {
    type: String,
    default: 'https://vectorified.com/images/avatar-icon-png-9.jpg'
  }
});

function validateComment(comment) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(255)
      .required(),
    description: Joi.string()
      .min(5)
      .required(),
      postdate: Joi.date()
  });
  return schema.validate(comment);
}

const Comment = mongoose.model('Task', commentSchema);

exports.comment = commentSchema;
exports.Comment = Comment;
exports.validateComment = validateComment;
