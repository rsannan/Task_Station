const mongoose = require("mongoose");
const Joi = require("joi");

const commentSchema = new mongoose.Schema(
  {
    card: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
      required: true,
    },
    checklist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CheckList",
      required: true,
    },
    text: {
      type: String,
      maxlength: 1024,
      trim: true,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
const Comment = mongoose.model("Comment", commentSchema);

const validateCreateComment = (comment) => {
  const schema = Joi.object({
    cardId: Joi.string().required(),
    checklistId: Joi.string().required(),
    text: Joi.string().max(1024).required(),
  });

  return schema.validate(comment);
};

const validateUpdateComment = (comment) => {
  const schema = Joi.object({
    cardId: Joi.string().optional(),
    checklistId: Joi.string().optional(),
    text: Joi.string().max(1024).optional(),
  });

  return schema.validate(comment);
};

module.exports.Comment = Comment;
module.exports.validateCreateComment = validateCreateComment;
module.exports.validateUpdateComment = validateUpdateComment;
