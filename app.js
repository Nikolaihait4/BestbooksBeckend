// import express from "express";
// import morgan from "morgan";
// import cors from "cors";
const mongoose = require("mongoose");
const express = require("express");
// const app = require("app");

// import contactsRouter from "./routes/contactsRouter.js";

const app = express();

const DB_Host =
  "mongodb+srv://Haitjet:w4NGVdpKuYh39Usl@cluster0.hi9qo5h.mongodb.net/books_reader?retryWrites=true&w=majority";
mongoose
  .connect(DB_Host)
  .then(() =>
    app.listen(3000, () => {
      console.log("Server is running. Use our API on port: 3000");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.use(morgan("tiny"));
// app.use(cors());
// app.use(express.json());

// app.use("/api/contacts", contactsRouter);

// app.use((_, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = "Server error" } = err;
//   res.status(status).json({ message });
// });

// app.listen(3000, () => {
//   console.log("Server is running. Use our API on port: 3000");
// });
