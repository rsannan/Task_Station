const express = require("express");
const validateId = require("../middleware/validateId");
const {
  createComment,
  fetchComments,
  getComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments.controller");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", [auth], createComment);
router.get("/:id", [validateId], getComment);
router.get("/", fetchComments);
router.patch("/:id", [validateId, auth], updateComment);
router.delete("/:id", [validateId, auth], deleteComment);

module.exports = router;
