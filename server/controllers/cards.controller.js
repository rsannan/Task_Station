const {
  Card,
  validateCreateCard,
  validateUpdateCard,
} = require("../models/Card");
const { List } = require("../models/List");

const createCard = async (req, res) => {
  //validate request
  const { error } = validateCreateCard(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //ensure the list exists
  const list = await List.findById(req.body.listId);
  if (!list)
    return res
      .status(404)
      .send({ message: "List with the given Id cannot found." });

  //create new card
  const card = new Card({
    name: req.body.name,
    description: req.body.description,
    listId: req.body.listId,
    position: req.body.position,
    tags: req.body.tags,
    dueDate: req.body.dueDate,
  });

  //save the card
  await card.save();

  //return response
  res.send({ message: "A new card was created.", card });
};

const fetchCards = async (req, res) => {
  const cards = await Card.find();

  res.send({ cards });
};

const getCard = async (req, res) => {
  const card = await Card.findById(req.params.id);
  if(!card) return res.status(404).send({message: "Card with the given Id cannot be found."});

  res.send({ card });
};

const updateCard = async (req, res) => {
  //validate request body
  const { error } = validateUpdateCard(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //ensure card exists
  const card = await Card.findById(req.params.id);
  if (!card)
    return res
      .status(404)
      .send({ message: "Card with the given Id cannot be found." });

  //make changes
  const { name, description, listId, position, tags, archived, dueDate } =
    req.body;
  if (name) card.name = name;
  if (description) card.description = description;
  if (listId) card.listId = listId;
  if (tags) card.tags = tags;
  if (req.body.hasOwnProperty("position")) card.position = position;
  if (req.body.hasOwnProperty("archived")) card.archived = archived;
  if (dueDate) card.dueDate = dueDate;

  //save changes
  await card.save();

  //return response
  res.send({ card });
};

const deleteCard = async (req, res) => {
    const card = await Card.findByIdAndRemove(req.params.id);

    if(!card) return res.status(404).send({message: "Card with the given id cannot be found."});

    res.send({message: "Card was deleted successfully.", card});
}

module.exports.createCard = createCard;
module.exports.fetchCards = fetchCards;
module.exports.getCard = getCard;
module.exports.updateCard = updateCard;
module.exports.deleteCard = deleteCard;
