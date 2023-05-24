const express = require("express");
const {
  createBoard,
  fetchBoards,
  getBoard,
  updateBoard,
  deleteBoard,
} = require("../controllers/boards.controller");
const validateId = require("../middleware/validateId");
const auth = require("../middleware/auth");

const router = express.Router();
router.post("/", createBoard);
router.get("/", fetchBoards);
router.get("/:id", [validateId], getBoard);
router.patch("/:id", [validateId], updateBoard);
router.delete("/:id", [validateId, auth], deleteBoard);

module.exports = router;
