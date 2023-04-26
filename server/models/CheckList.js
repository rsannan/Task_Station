const mongoose = require("mongoose");
const Joi = require("joi");

const checkListSchema = new mongoose.Schema({
  value: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card",
    required: true,
  },
  position: {
    type: Number,
    min: 0,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Date,
  },
  archived: {
    type: Boolean,
    default: false,
  },
});

//validate request body on checklist creation
const validateCreateCheckList = (checkList) => {
  const schema = Joi.object({
    value: Joi.string().max(256).required(),
    cardId: Joi.string().required(),
    position: Joi.number().required(),
  });

  return schema.validate(checkList);
};


//validate request body on checklist update
const validateUpdateCheckList = (checkList) => {
  const schema = Joi.object({
    value: Joi.string().max(256).optional(),
    cardId: Joi.string().optional(),
    position: Joi.number().optional(),
    archived: Joi.boolean().optional()
  });

  return schema.validate(checkList);
};

const CheckList = mongoose.model("CheckList", checkListSchema);

module.exports.validateCreateCheckList = validateCreateCheckList;
module.exports.validateUpdateCheckList = validateUpdateCheckList;
module.exports.CheckList = CheckList;
