const contactControllers = require("../controllers/contact.controller");

const router = require("express").Router();

router
  .route("/")
  .get(contactControllers.findAll)
  .post(contactControllers.create)
  .delete(contactControllers.deleteall);
router.route("/favourites").get(contactControllers.findAllFavourites);
router
  .route("/:id")
  .get(contactControllers.findOne)
  .put(contactControllers.update)
  .delete(contactControllers.delete);

module.exports = router;
