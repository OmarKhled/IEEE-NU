import express from "express";
// import news from "../data/News.js";
import News from "../models/newsModel.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// @desc    Get All News
// @route   GET /api/news
// @access  Public
router.get("/", async (req, res) => {
  const news = await News.find({});
  res.json({ news });
});

router.post("/", auth, async (req, res) => {
  const newNews = req.body;
  if (!newNews) {
    res.status(400).json({ msg: "No Body" });
  }
  try {
    const news = new News({
      title: newNews.title,
      url: newNews.url,
      description: newNews.description,
      date: newNews.date,
    });

    await news.save();

    res.json({ news });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Get Single News
// @route   GET /api/news/:id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.json({ news });
  } catch (err) {
    console.log(err);
    res.json({ msg: "Server Error" });
  }
});

// @desc    Update Single News
// @route   PUT /api/news/:id
// @access  Private
router.put("/:id", auth, async (req, res, next) => {
  try {
    const newNews = req.body;
    const news = await News.findById(req.params.id);

    if (newNews.title) news.title = newNews.title;
    if (newNews.date) news.date = newNews.date;
    if (newNews.description) news.description = newNews.description;
    if (newNews.url) news.url = newNews.url;

    await news.save();
    res.json(news);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Delete Single News
// @route   DELETE /api/news/:id
// @access  Private
router.delete("/:id", auth, async (req, res, next) => {
  try {
    const news = await News.findByIdAndRemove(req.params.id);
    res.json(news);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
