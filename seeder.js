import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import User from "./models/userModel.js";
import News from "./models/newsModel.js";
import Events from "./models/eventsModel.js";
import Members from "./models/membersModel.js";
import connectDB from "./config/db.js";

import news from "./data/News.js";
import users from "./data/Users.js";
import events from "./data/Events.js";
import members from "./data/Members.js";

dotenv.config();
connectDB();

const exportData = async () => {
  try {
    await News.deleteMany();
    await User.deleteMany();
    await Events.deleteMany();
    await Members.deleteMany();

    await News.insertMany(news);
    await User.insertMany(users);
    await Events.insertMany(events);
    await Members.insertMany(members);

    console.log("Data Exported!".green.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err}, ${err.message}`.red.inverse.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await News.deleteMany();
    await Events.deleteMany();
    await Members.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err}, ${err.message}`.red.inverse.bold);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  exportData();
}
