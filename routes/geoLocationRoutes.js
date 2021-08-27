import express from "express";
import os from "os";

const router = express.Router();

// router.get("/", async (req, res, next) => {

// });

router.post("/", async (req, res, next) => {
  const geoData = req.body.geoData;
  const clientName = req.body.clientName;

  // console.log(req.body.geoData);
  // console.log(req);
  // console.log(os.hostname());
  // console.log(clientName);

  console.log(geoData.geoplugin_request, clientName);
  console.log(os.hostname());
  try {
    const network = new ActiveXObject("WScript.Network");
    // Show a pop up if it works
    console.log(network);
    res.status(200).json({ msg: "success" });
  } catch (e) {
    res.status(200).json({ msg: "success" });
  }
});

export default router;
