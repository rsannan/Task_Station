const { default: mongoose } = require("mongoose");
const { Card } = require("../models/Card");
const { CheckList } = require("../models/CheckList");
const { Comment } = require("../models/Comment");

const {
  validateCreateComment,
  validateUpdateComment,
} = require("../models/Comment");

const createComment = async (req, res) => {
  //validate request body
  const { error } = validateCreateComment(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //ensure card
  const card = await Card.findById(req.body.cardId);
  if (!card)
    return res
      .status(404)
      .send({ message: "Card with the given id cannot be found." });

  //ensure checklist exists
  const checklist = await CheckList.findById(req.body.checklistId);
  if (!checklist)
    return res
      .status(404)
      .send({ message: "Checklist with the given id cannot be found." });

  //extract user id
  const userId = req.user._id;
  if (!userId) return res.status(404).send({ message: "User not found." });

  //create new comment
  const comment = new Comment({
    card: req.body.cardId,
    checklist: req.body.checklistId,
    text: req.body.text,
    author: req.user,
  });

  //save
  await comment.save();

  //return response
  res.send({ message: "Comment added successfully", comment });
};

const fetchComments = async (req, res) => {
  //extract query string parameters
  const { card_id, checklist_id } = req.query;

  //ensure card_id is a valid object id
  const cardIdValid = mongoose.Types.ObjectId.isValid(card_id);
  if (!cardIdValid)
    return res
      .status(404)
      .send({ message: "Card with the given id cannot be found." });

  //ensure checklist_id is a valid object id
  const isChecklistIdValid = mongoose.Types.ObjectId.isValid(checklist_id);
  if (!isChecklistIdValid)
    return res
      .status(404)
      .send({ message: "Checklist with the given Id cannot be found." });

  //form query object
  const filter = {};
  if (card_id) filter.card = card_id;
  if (checklist_id) filter.checklist = checklist_id;

  //perform query
  const comments = await Comment.find({ ...filter });

  //return response
  res.send({ comments, count: comments.length });
};

const getComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment)
    return res
      .status(404)
      .send({ message: "Comment with the given id cannot be found." });

  res.send({ comment });
};

const updateComment = async (req, res) => {
  //validate request body
  const { error } = validateUpdateComment(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //look up comment
  const comment = await Comment.findById(req.params.id);
  if (!comment)
    return res
      .status(404)
      .send({ message: "Comment with the given id cannot be found." });

  //ensure card exists if cardId is provided
  const { cardId, checklistId, text } = req.body;
  if (cardId) {
    let card = await Card.findById(cardId);
    if (!card)
      return res
        .status(404)
        .send({ message: "Card with the given id not found." });

    //update comment card field
    comment.card = card._id;
  }

  //ensure checklist exists if checklistId is provided
  if (checklistId) {
    let checklist = await CheckList.findById(req.body.checklistId);
    if (!checklist)
      return res
        .status(404)
        .send({ message: "Checklist with the given id cannot be found." });

    //update checklist id field
    comment.checklist = checklist._id;
  }

  //update text field
  if (req.body.text) comment.text = req.body.text;

  //save comment
  await comment.save();

  //return response
  res.send({ message: "Comment was updated.", comment });
};

const deleteComment = async (req, res) => {
  let comment = await Comment.findById(req.params.id);
  if (comment.author._id != req.user._id)
    return res.status(400).send({
      message: "Could not delete comment. It belongs to another user.",
    });

  comment = await Comment.findByIdAndRemove(req.params.id);
  if (!comment)
    return res
      .status(404)
      .send({ message: "Comment with the given id cannot be found." });

  res.send({ message: "Comment was deleted.", comment });
};

module.exports.createComment = createComment;
module.exports.fetchComments = fetchComments;
module.exports.getComment = getComment;
module.exports.updateComment = updateComment;
module.exports.deleteComment = deleteComment;
