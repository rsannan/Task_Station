const boards = require("../routes/boards");
const system = require("../routes/system");
const users = require("../routes/users");
const lists = require("../routes/lists");
const cards = require("../routes/card");
const checkLists = require("../routes/checkLists");
const comments = require("../routes/comments");

module.exports = (app) => {
  app.use("/", system);
  app.use("/api/users", users);
  app.use("/api/boards", boards);
  app.use("/api/lists", lists);
  app.use("/api/cards", cards);
  app.use("/api/checklists", checkLists);
  app.use("/api/comments", comments);
};
