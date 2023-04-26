const express = require("express");
const {
  createCheckList,
  fetchCheckList,
  getCheckList,
  updateCheckList,
  deleteCheckList,
  check,
  uncheck,
} = require("../controllers/checkList.controller");
const validateId = require("../middleware/validateId");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", [auth], createCheckList);
router.get("/:id", [validateId], getCheckList);
router.get("/", fetchCheckList);
router.patch("/:id", [validateId, auth], updateCheckList);
router.patch("/:id/uncheck", [validateId, auth], uncheck);
router.patch("/:id/check", [validateId, auth], check);
router.delete("/:id", [validateId, auth], deleteCheckList);

module.exports = router;
