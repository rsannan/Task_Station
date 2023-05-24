const mongoose = require("mongoose");
const Joi = require("joi");

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 256,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      maxlength: 4096,
      trim: true,
      required: false,
    },
    listId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
      required: true,
    },
    position: {
      type: Number,
      min: 0,
      required: true,
    },
    tags: { type: [String], default: [] },
    dueDate: {
      type: Date,
      required: false,
    },
    archived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


//validates card data upon creation
const validateCreateCard = (card) => {
  const schema = Joi.object({
    name: Joi.string().max(256).optional(),
    description: Joi.string().max(4096),
    listId: Joi.string().optional(),
    position: Joi.number().optional(),
    tags: Joi.array().items(Joi.string()),
    dueDate: Joi.date().optional(),
  });

  return schema.validate(card);
};


const validateUpdateCard = (card) => {
  const schema = Joi.object({
    name: Joi.string().max(256).required(),
    description: Joi.string().max(4096),
    listId: Joi.string().required(),
    position: Joi.number().required(),
    tags: Joi.array().items(Joi.string()),
    archived: Joi.boolean().optional(),
    dueDate: Joi.date().required(),
  })

  return schema.validate(card);
}


const Card = mongoose.model("Card", cardSchema);

module.exports.validateCreateCard = validateCreateCard;
module.exports.validateUpdateCard = validateUpdateCard;

module.exports.Card = Card;
