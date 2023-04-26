const express = require("express");
const {
  createCard,
  getCard,
  fetchCards,
  updateCard,
  deleteCard,
} = require("../controllers/cards.controller");
const auth = require("../middleware/auth");
const validateId = require("../middleware/validateId");

const router = express.Router();

router.post("/", [auth], createCard);
router.get("/:id", [validateId], getCard);
router.get("/", fetchCards);
router.patch("/:id", [validateId, auth], updateCard);
router.delete("/:id", [validateId, auth], deleteCard);


module.exports = router;
