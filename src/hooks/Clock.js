import React, { useEffect, useState } from "react";
import moment from "moment";
import "../components/Header/style.css";
function Clock(props) {
  const [currTime, setCurrTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime(moment().format("MMMM Do YYYY, h:mm a"));
    }, 1000);
    // clear cache
    return () => clearInterval(interval);
  }, [currTime]);

  return (
    <div className="profile-name p-2 border-0 ">
      <h6
        style={{
          width: "12vw",
          fontWeight: "normal",
        }}
      >
        {currTime}
      </h6>
    </div>
  );
}

export default Clock;
