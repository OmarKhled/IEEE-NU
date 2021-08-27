import express from "express";
import Clients from "../models/clientModel.js";

const router = express.Router();

// router.get("/", async (req, res, next) => {

// });

router.post("/trackChanges", async (req, res, next) => {
  try {
    const path = req.body.pathname;
    const geoData = req.body.geoData;
    const clientName = req.body.clientName;
    const platform = req.body.platform;

    console.log(
      `The visitor with ip address of ${geoData.geoplugin_request} is now on ${path} path`
    );

    const client = await Clients.findOne({ ip: geoData.geoplugin_request });

    if (client) {
      if (!client.paths.includes(path)) {
        client.paths.push(path);
      }
    } else {
      const client = new Clients({
        ip: geoData.geoplugin_request,
        os: platform.os,
        country: geoData.geoplugin_countryName,
        city: geoData.geoplugin_city,
      });

      await client.save();
    }

    await client.save();

    res.status(200).json({ msg: "success" });
  } catch (err) {
    res.status(200).json({ msg: "success" });
    console.log(err);
  }
});

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
  } catch (err) {
    res.status(200).json({ msg: "success" });
    console.log(err);
  }
});

export default router;
