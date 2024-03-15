const { Schema, model } = require("mongoose");
const { hendleMongooseError } = require("../helpers");
const Joi = require("joi");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true],
    },
    author: {
      type: String,
      required: [true],
    },
    year: {
      type: Number,
      // required: [true],
    },
    imageUrl: {
      type: String,
      // required: [true],
    },
    genre: {
      type: String,
      enum: ["fantastic", "love"],
      required: [true],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  }
  // { versionKey: false, timestamps: true }
);

// bookSchema.post("save", hendleMongooseError);

// const addSchema = Joi.object({
//   name: Joi.string().required().messages({
//     "any.required": "Missing required name field",
//     "string.base": "Name must be text",
//   }),
//   email: Joi.string().required().messages({
//     "any.required": "Missing required email field",
//     "string.base": "Email must be text",
//   }),
//   phone: Joi.string().required().messages({
//     "any.required": "Missing required phone field",
//     "string.base": "Phone must be text",
//   }),
//   favorite: Joi.boolean(),
// });

// const updateFavSchemas = Joi.object({
//   favorite: Joi.boolean().required().messages({
//     "any.required": "Missing required field favorite",
//     "boolean.base": "Favorite must be boolean type",
//   }),
// });

// const schemas = {
//   addSchema,
//   updateFavSchemas,
// };

const Book = model("book", bookSchema);

module.exports = { Book };
