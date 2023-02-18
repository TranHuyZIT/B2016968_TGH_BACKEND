const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");

exports.create = async (req, res, next) => {
  if (!req.body?.name) next(new ApiError("Name không được trống"));
  try {
    const contactService = new ContactService(MongoDB.client);
    const document = await contactService.create(req.body);
    return res.send(document);
  } catch (err) {
    return next(new ApiError("An error occured while retrieving contacts"));
  }
};
exports.findAll = async (req, res, next) => {
  try {
    let documents = [];
    const { name } = req.query;
    const contactService = new ContactService(MongoDB.client);

    if (name) {
      documents = await contactService.findByName(name);
    } else {
      documents = await contactService.find({});
    }
    res.send(documents);
  } catch (err) {
    return next(new ApiError("An error occured while retrieving contacts"));
  }
};
exports.findOne = async (req, res, next) => {
  try {
    const contactService = new ContactService(MongoDB.client);
    const id = req.params.id;
    const document = await contactService.findById(id);
    res.send(document);
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
