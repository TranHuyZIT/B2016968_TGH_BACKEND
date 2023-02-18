const express = require("express");
const cors = require("cors");
const ApiError = require("./api-error");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book" });
});

app.use("/api/contacts", require("./routes/contact.route"));

app.use((req, res, next) => {
  next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  return res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Internal server error" });
});

module.exports = app;
