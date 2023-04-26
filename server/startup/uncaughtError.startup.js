module.exports = () => {
  process.on("uncaughtException", (err) => {
    console.error(err);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    throw new Error(err);
  });
};
