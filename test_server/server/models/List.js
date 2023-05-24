const mongoose = require("mongoose");
const Joi = require("joi");

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Board",
    required: true,
  },
  position: {
    type: Number,
    min: 0,
    required: true,
  },
  closed: {
    type: Boolean,
    default: false,
  },
});

const validateCreateList = (list) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    boardId: Joi.string().required(),
    position: Joi.number().min(0).required(),
  });

  return schema.validate(list);
};

const validateUpdateList = (list) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    boardId: Joi.string().required(),
    position: Joi.number().min(0).required(),
  });

  return schema.validate(list);
};


const List = mongoose.model("List", listSchema);

module.exports.validateCreateList = validateCreateList;
module.exports.validateUpdateList = validateUpdateList;
module.exports.List = List;
