const express = require("express");

const ctrl = require("../../controllers/booksControllers");

const router = express.Router();

// const { validateBody, isValidId } = require("../../middlewares");

// const { schemas } = require("../../models/contact");

router.get("/", ctrl.getAll);

// router.get("/:id", isValidId, ctrl.getById);

// router.post("/", validateBody(schemas.addSchema), ctrl.add);

// router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updeteById);

// router.patch(
//   "/:id/favorite",
//   isValidId,
//   validateBody(schemas.updateFavSchemas),
//   ctrl.updeteFav
// );

// router.delete("/:id", isValidId, ctrl.deleteById);

module.exports = router;