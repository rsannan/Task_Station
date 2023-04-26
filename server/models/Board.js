const mongoose = require("mongoose");
const Joi = require("joi");

const boardSchema = new mongoose.Schema({
    name: {
        type: String, 
        maxlength: 1024,
        trim: true,
        required: true, 
    },
    description: {
        type: String, 
        maxlength: 4096,
        required: true, 
        trim: true
    },
    backgroundColor: {
        type: String, 
        maxlength: 32,
        trim: true
    }, 
    backgroundImage: {
        type: String, 
        maxlength: 1024,
        trim: true
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    }, 
    closed: {
        type: Boolean, 
        default: false
    }, 
    starred: {
        type: Boolean, 
        default: false
    }, 
}, {timestamps: true});


const Board = mongoose.model("Board", boardSchema);


const validateCreateBoard = (board) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(1024).required(),
        description: Joi.string().max(4096).optional(),
        backgroundColor: Joi.string().max(32).optional(), 
        backgroundImage: Joi.string().max(1024).optional(),
        userId: Joi.string().required(),
    });

    return schema.validate(board);
}


const validateUpdateBoard = (board) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(1024).required(),
        description: Joi.string().max(4096).optional(),
        backgroundColor: Joi.string().max(32).optional(),
        backgroundImage: Joi.string().max(1024).optional(),
        closed: Joi.boolean().optional(),
        starred: Joi.boolean().optional()
    });

    return schema.validate(board);
}

module.exports.validateCreateBoard = validateCreateBoard;
module.exports.validateUpdateBoard = validateUpdateBoard;
module.exports.Board = Board;