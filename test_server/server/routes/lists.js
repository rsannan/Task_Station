const express = require("express");
const {
  createList,
  getList,
  fetchList,
  updateList,
  deleteList,
} = require("../controllers/lists.controller");
const validateId = require("../middleware/validateId");

const router = express.Router();
router.post("/", createList);
router.get("/:id", [validateId], getList);
router.get("/", fetchList);
router.put("/:id", [validateId], updateList);
router.delete("/:id", [validateId], deleteList)

module.exports = router;
