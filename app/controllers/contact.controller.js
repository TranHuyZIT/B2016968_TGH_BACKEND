exports.create = async (req, res, next) => {
  try {
    res.send({ message: "create handler" });
  } catch (err) {}
};
exports.findAll = async (req, res, next) => {
  try {
    res.send({ message: "findAll handler" });
  } catch (err) {}
};
exports.findOne = async (req, res, next) => {
  try {
    res.send({ message: "findOne handler" });
  } catch (err) {}
};
exports.update = async (req, res, next) => {
  try {
    res.send({ message: "update handler" });
  } catch (err) {}
};
exports.delete = async (req, res, next) => {
  try {
    res.send({ message: "delete handler" });
  } catch (err) {}
};
exports.deleteall = async (req, res, next) => {
  try {
    res.send({ message: "deleteAll handler" });
  } catch (err) {}
};
exports.findAllFavourites = async (req, res, next) => {
  try {
    res.send({ message: "findAllFavourites handler" });
  } catch (err) {}
};
