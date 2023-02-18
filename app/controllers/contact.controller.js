const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");

exports.create = async (req, res, next) => {
  if (!req.body?.name) next(new ApiError("Name không được trống"));
  try {
    const contactService = new ContactService(MongoDB.client);
    const document = await contactService.create(req.body);
    return res.send(document);
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
