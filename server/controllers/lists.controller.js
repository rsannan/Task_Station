const { Board } = require("../models/Board");
const {
  List,
  validateCreateList,
  validateUpdateList,
} = require("../models/List");

const createList = async (req, res) => {
  //validate request body
  const { error } = await validateCreateList(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //emsure board with given id exists
  const board = await Board.findById(req.body.boardId);
  if (!board)
    return res
      .status(404)
      .send({ message: "Board with the given Id not found." });

  //ensure no list of the same board has the same position
  let list = List.findOne({
    boardId: req.body.boardId,
    position: req.body.position,
  });
  if (!list)
    return res.status(404).send({
      message: "Looks like there already exists a list the given position.",
    });

  //create a new list
  list = new List({
    name: req.body.name,
    boardId: req.body.boardId,
    position: req.body.position,
  });

  //save the new list
  await list.save();

  //return response
  res.send({ list });
};

const fetchList = async (req, res) => {
  const list = await List.find();

  res.send({ list });
};

const getList = async (req, res) => {
  const list = await List.findById(req.params.id);

  res.send({ list });
};

const updateList = async (req, res) => {
  //validate request body
  const { error } = await validateUpdateList(req.body);
  if (error) return res.send({ message: error.details[0].message });

  //Find and update
  const list = await List.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        boardId: req.body.boardId,
        position: req.body.position,
      },
    },
    { new: true }
  );

  if (!list)
    return res
      .status(404)
      .send({ message: "List with the given id cannot be found." });

  res.send({ list });
};

const deleteList = async (req, res) => {
  //Todo: Ensure that the list is empty

  //Todo: Ensure the list belongs to the owner of the board

  const list = await List.findByIdAndRemove(req.params.id);

  if (!list) return res.status(404).send({ message: "List not found." });

  res.send({ list });
};

module.exports.updateList = updateList;
module.exports.createList = createList;
module.exports.getList = getList;
module.exports.fetchList = fetchList;
module.exports.deleteList = deleteList;
