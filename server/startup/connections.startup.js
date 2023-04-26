const mongoose = require("mongoose");
const config = require("config");

module.exports = (app) => {
  const port = config.get("port");
  const db = config.get("db") || process.env.DATABASE_URI;

  mongoose
    .connect(db)
    .then(() =>
      app.listen(port, () => console.log(`Listening on port ${port}...`))
    )
    .catch((err) => console.log(err));
};
