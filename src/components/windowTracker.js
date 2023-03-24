import React, { useEffect, useState } from "react";

function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function watchWidth() {
      console.log("Setting up watchWidth...");
      setWindowWidth(() => window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    return function () {
      console.log("Cleaning up watchWidth");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return <h1>Window width: {windowWidth}</h1>;
}

export default WindowTracker;
