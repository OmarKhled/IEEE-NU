import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import asyncHandler from "express-async-handler";

import usersRoutes from "./routes/usersRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import eventsRoutes from "./routes/eventsRoutes.js";

import errorHandler from "./middleware/errorHandler.js";
import fileUpload from "express-fileupload";
import auth from "./middleware/auth.js";
import path from "path";

dotenv.config();
connectDB();

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  "/api/upload",
  auth,
  asyncHandler(async (req, res, next) => {
    // console.log("hi");
    // console.log(req.files === null);
    if (req.files === null) {
      console.log("no files");
      return res.status(400).json({ msg: "No file uploaded" });
    }
    const __dirname = path.resolve();
    const file = req.files.file;
    if (process.env.NODE_ENV === "production") {
      file.mv(`${__dirname}/client/build/public/images/${file.name}`, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send({ msg: err });
        }
      });
    } else {
      file.mv(`${__dirname}/client/public/images/${file.name}`, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send({ msg: err });
        }
      });
    }
    next();
  })
);

app.use("/api/news", newsRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/users", usersRoutes);

// app.get("/", (req, res) => {
//   res.send("Welcome to IEEE NU api");
// });

app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));

  // const __dirname = path.resolve();
  app.get("*", (req, res) => {
    console.log("static");
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} mode on port ${PORT}...`
      .cyan.bold
  )
);
