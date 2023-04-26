const { Card } = require("../models/Card");
const {
  validateCreateCheckList,
  CheckList,
  validateUpdateCheckList,
} = require("../models/CheckList");

const createCheckList = async (req, res) => {
  //validate request
  const { error } = validateCreateCheckList(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //ensure card exists
  const card = await Card.findById(req.body.cardId);
  if (!card)
    return res
      .status(404)
      .send({ message: "Card with the given id cannot be found." });

  //ensure there is no task of the same card with the same position
  let checkList = await CheckList.findOne({
    position: req.body.position,
    cardId: req.body.cardId,
  });
  if (checkList)
    return res
      .status(400)
      .send({ message: "A card with the given position already exists" });

  //create new check list
  checkList = new CheckList({
    value: req.body.value,
    cardId: req.body.cardId,
    position: req.body.position,
  });

  //save
  await checkList.save();

  //return response
  res.send({ message: "Check list was added.", card: checkList });
};

const fetchCheckList = async (req, res) => {
  const checkLists = await CheckList.find();

  res.send({ checkLists });
};

const getCheckList = async (req, res) => {
  const checkList = await CheckList.findById(req.params.id);
  if (!checkList)
    return res
      .status(404)
      .send({ message: "Checklist with the given Id cannot be found." });

  res.send({ checkList });
};

const updateCheckList = async (req, res) => {
  //validate udpate
  const { error } = validateUpdateCheckList(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //look up the check list
  const checkList = await CheckList.findById(req.params.id);
  if (!checkList)
    return res.status(404).send({ message: "Checklist cannot be found." });

  //make changes
  const { value, cardId, position, archived } = req.body;
  if (value) checkList.value = value;
  if (cardId) checkList.cardId = cardId;
  if (req.body.hasOwnProperty("position")) checkList.position = position;
  if (req.body.hasOwnProperty("archived")) checkList.archived = archived;

  //save
  await checkList.save();

  //return response
  res.send({ message: "Checklist update successfully.", checkList });
};

const deleteCheckList = async (req, res) => {
  const checkList = await CheckList.findByIdAndRemove(req.params.id);
  if (!checkList)
    return res
      .status(404)
      .send({ message: "Checklist with the given Id cannot be found." });

  return res.send({ message: "CheckList deleted successfully.", checkList });
};

const check = async (req, res) => {
  //This controller marks the given checklist as completed
  const checklist = await CheckList.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        completed: true,
        completedAt: Date.now(),
      },
    },
    { new: true }
  );
  if (!checklist)
    return res
      .status(404)
      .send({ message: "Checklist with the given Id cannot be found." });

  res.send({ mssage: "Checklist was checked.", checklist });
};

const uncheck = async (req, res) => {
  //This controller marks the given checklist as uncompleted
  const checklist = await CheckList.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        completed: false,
        completedAt: null,
      },
    },
    { new: true }
  );
  if (!checklist)
    return res
      .status(404)
      .send({ message: "Checklist with the given Id cannot be found." });

  res.send({ mssage: "Checklist was unchecked.", checklist });
};

module.exports.createCheckList = createCheckList;
module.exports.fetchCheckList = fetchCheckList;
module.exports.getCheckList = getCheckList;
module.exports.updateCheckList = updateCheckList;
module.exports.deleteCheckList = deleteCheckList;
module.exports.check = check;
module.exports.uncheck = uncheck;
