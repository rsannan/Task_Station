const {
  Board,
  validateCreateBoard,
  validateUpdateBoard,
} = require("../models/Board");
const { User } = require("../models/User");

const createBoard = async (req, res) => {
  //validate the request body
  const { error } = validateCreateBoard(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //Ensure the user is in the database
  const user = await User.findById(req.body.userId);
  if (!user) return res.status(404).send({ message: "User not found." });

  //create a new board
  const board = new Board({
    name: req.body.name,
    description: req.body.description,
    backgroundColor: req.body.backgroundColor,
    backgroundImage: req.body.backgroundImage,
    user: req.body.userId,
  });

  //save the new board
  await board.save();

  //return response
  res.send({ board });
};

const fetchBoards = async (req, res) => {
  const boards = await Board.find();

  res.send(boards);
};

const getBoard = async (req, res) => {
  const board = await Board.findById(req.params.id).populate("user", "-password");
  if (!board) return res.status(404).send({ message: "Board not found." });

  res.send({ board });
};

const updateBoard = async (req, res) => {
  //validate request body
  const { error } = validateUpdateBoard(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //look up the board in the database
  const board = await Board.findById(req.params.id);
  if (!board) return res.status(404).send({ message: "Board not found." });

  //update fields
  const {
    name,
    description,
    backgroundColor,
    backgroundImage,
    closed,
    starred,
  } = req.body;
  if (name) board.name = name;
  if (description) board.description = description;
  if (backgroundColor) board.backgroundColor = backgroundColor;
  if (backgroundImage) board.backgroundImage = backgroundColor;
  if (req.body.hasOwnProperty("closed")) board.closed = closed;
  if (req.body.hasOwnProperty("starred")) board.starred = starred;

  //save
  await board.save();

  //return response
  res.send({ message: "Board has been updated successfully.", board });
};

const deleteBoard = async (req, res) => {
  //look up the board in the database
  const board = await Board.findByIdAndRemove(req.params.id);
  if (!board) return res.status(404).send({ message: "Board not found." });

  //ensure board belongs to user
  if (req.user._id.toHexString() !== board.user.toHexString())
    return res.status(400).send({ message: "Board could not be deleted." });

  //delete related data..
  //todo: Delete data related to board


  await Board.findOneAndRemove(board._id);

  //return respose
  res.send({ message: "Board was deleted successfully.", board });
};

module.exports.createBoard = createBoard;
module.exports.fetchBoards = fetchBoards;
module.exports.updateBoard = updateBoard;
module.exports.deleteBoard = deleteBoard;
module.exports.getBoard = getBoard;
