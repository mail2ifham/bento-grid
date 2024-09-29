import React from "react";
import schedule from "../assets/images/illustration-consistent-schedule.webp";

function Maintain() {
  return (
    <div className="maintain-container">
      <h2>
        Maintain a consistent posting schedule.
      </h2>
      <img src={schedule} alt="schedule" />
    </div>
  );
}

export default Maintain;
