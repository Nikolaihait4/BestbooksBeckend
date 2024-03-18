const { Schema, model } = require("mongoose");
const { hendleMongooseError } = require("../helpers");
const Joi = require("joi");

const ganreList = ["fantastic", "love"];

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
      enum: ganreList,
      required: [true],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

bookSchema.post("save", hendleMongooseError);

const addSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Missing required title field",
    "string.base": "Title must be text",
  }),
  author: Joi.string().required().messages({
    "any.required": "Missing required author field",
    "string.base": "Author must be text",
  }),
  genre: Joi.string()
    .valid(...ganreList)
    .messages({
      "any.required": "Missing required genre field",
      "string.base": "Genre must be text",
    }),
  favorite: Joi.boolean(),
});

const updateFavSchemas = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "Missing required field favorite",
    "boolean.base": "Favorite must be boolean type",
  }),
});

const updateImgSchemas = Joi.object({
  imageUrl: Joi.string().required().messages({
    "any.required": "Missing required field IMG",
    "boolean.base": "Favorite must be string type",
  }),
});

const schemas = {
  addSchema,
  updateFavSchemas,
  updateImgSchemas,
};

const Book = model("book", bookSchema);

module.exports = { Book, schemas };
