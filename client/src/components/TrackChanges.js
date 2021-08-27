import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const TrackChanges = ({ history }) => {
  console.log(history);
  const update = async (location) => {
    try {
      const geoRes = await axios.get(
        "http://www.geoplugin.net/json.gp?ip=%3Cyour%20ip%20here%3E&jsoncallback"
      );

      const data = {
        geoData: geoRes.data,
        pathname: location.pathname,
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
