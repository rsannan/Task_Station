const express = require("express");
const mongoose = require("mongoose");

const boards = require("./routes/boards");
const system = require("./routes/system");
const users = require("./routes/users");
const lists = require("./routes/lists");
const cards = require("./routes/card");
const checkLists = require("./routes/checkLists");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", system);
app.use("/api/users", users);
app.use("/api/boards", boards);
app.use("/api/lists", lists);
app.use("/api/cards", cards);
app.use("/api/checklists", checkLists);

const port = 8000;
const db = "mongodb://0.0.0.0/task_station";
mongoose
  .connect(db)
  .then(() =>
    app.listen(port, () => console.log(`Listening on port ${port}...`))
  )
  .catch((err) => console.log(err));
