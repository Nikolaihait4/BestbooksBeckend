const express = require("express");

const ctrl = require("../../controllers/booksControllers");

const router = express.Router();

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/book");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updeteById);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavSchemas),
  ctrl.updeteFav
);

router.patch(
  "/:id/imageUrl",
  isValidId,
  validateBody(schemas.updateImgSchemas),
  ctrl.updeteImg
);

router.delete("/:id", isValidId, ctrl.deleteById);

module.exports = router;
