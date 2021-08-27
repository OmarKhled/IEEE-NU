import express from "express";
import Clients from "../models/clientModel.js";

const router = express.Router();

// router.get("/", async (req, res, next) => {

// });

router.post("/", async (req, res, next) => {
  try {
    const geoData = req.body.geoData;
    const clientName = req.body.clientName;
    const platform = req.body.platform;

    console.log(
      `You got a visitor from ${geoData.geoplugin_countryName}:${geoData.geoplugin_city}-${geoData.geoplugin_regionName} that have an ip address of ${geoData.geoplugin_request} using ${platform.name} on ${platform.os.family}`
    );

    const found = await Clients.findOne({ ip: geoData.geoplugin_request });

    if (!found) {
      const client = new Clients({
        ip: geoData.geoplugin_request,
        os: platform.os,
        country: geoData.geoplugin_countryName,
        city: geoData.geoplugin_city,
      });

      await client.save();
    }

    res.status(200).json({ msg: "success" });
  } catch (e) {
    res.status(200).json({ msg: "success" });
    console.log(e);
  }
});

export default router;
