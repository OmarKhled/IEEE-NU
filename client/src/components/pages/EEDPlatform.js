import React from "react";

const EEDPlatform = () => {
  return (
    <div className="px-5" style={{ maxWidth: "55rem", margin: "auto" }}>
      <div className="d-flex gap-3 flex-wrap">
        <img
          src="https://scontent.fcai2-1.fna.fbcdn.net/v/t39.30808-6/p526x296/244282294_4709280159133276_5150411040505466280_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=UU8t2AABGAQAX95lT8p&_nc_ht=scontent.fcai2-1.fna&oh=a29f9c6cd2e60d6a15b0d80e135f63d3&oe=616F8CEF"
          style={{ display: "block", width: "100%" }}
          className="rounded-3"
        />
        <p style={{ lineHeight: "1.8rem", textAlign: "justify" }}>
          <h3 className="mb-3">
            Egyptian Engineering Day 2021 will be live on Airmeet!
          </h3>
          Airmeet is an event platform that host +100K participant, up to 16
          speakers on the same time and also you can be on live stream
          seamlessly on YouTube and Facebook.
          <br />
          First step, download Airmeet Apk through this link:{" "}
          <a href="https://play.google.com/store/apps/details?id=com.airmeet.airmeet&fbclid=IwAR1uuQKihIEVSolw7fRESWP8m-1LYYagUJlu1o4pQ6PqRtCP0DQ0XDJyDoA">
            https://play.google.com/store/apps/details...
          </a>
          <br />
          Then, your steps to use the Apk through this link:{" "}
          <a href="https://www.youtube.com/watch?v=sVTdZz2gTTA&t=53s">
            https://www.youtube.com/watch?v=sVTdZz2gTTA&t=53s...
          </a>
          <br />
          Sign up and be ready for EED2021.
          <br />
        </p>
      </div>
    </div>
  );
};

export default EEDPlatform;
