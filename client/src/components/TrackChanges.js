import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import platform from "platform";
import os from "os";

const TrackChanges = ({ history }) => {
  const update = async (location) => {
    try {
      const geoRes = await axios.get(
        "http://www.geoplugin.net/json.gp?ip=%3Cyour%20ip%20here%3E&jsoncallback"
      );

      const clientName = os.hostname();
      const platformDetails = {
        name: platform.name,
        os: platform.os,
        product: platform.product,
        manufacture: platform.manufacture,
      };

      const data = {
        geoData: geoRes.data,
        pathname: location.pathname,
        clientName,
        platform: platformDetails,
      };

      setTimeout(async () => {
        await axios.post("/api/geoData/trackChanges", data);
      }, 1500);
    } catch (err) {
      // console.log("Err");
    }
  };
  useEffect(() => {
    update(history.location);
  }, []);
  history.listen(async (location, action) => {
    update(location);
  });

  return <div></div>;
};

export default withRouter(TrackChanges);
