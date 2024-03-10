const mongoose = require("mongoose");
const app = require("./app");

// const { DB_HOST, PORT = 3000 } = process.env;

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     console.log("Database connection successful");
//     app.listen(PORT, () => {
//       console.log(`Server running. Use our API on port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });

// const express = require("express");


// const app = express();

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

