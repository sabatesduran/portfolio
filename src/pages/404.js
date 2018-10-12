import React from "react";
import LostLightsOn from "../images/lost_lights_on.webp";
import LostLightsOff from "../images/lost_lights_off.webp";

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <div
      style={{
        width: "100%",
        display: "flex"
      }}
    >
      <img
        src={
          JSON.parse(localStorage.getItem("sabatesduran-config-v0")).darkMode
            ? LostLightsOff
            : LostLightsOn
        }
        style={{
          width: "70%",
          height: "100%"
        }}
      />
    </div>
  </div>
);

export default NotFoundPage;
