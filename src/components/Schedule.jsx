import React from "react";
import img from '../assets/images/illustration-schedule-posts.webp'
function Schedule() {
  return (
    <div className="schedule-container">
      <h2>Schedule to social media.</h2>
      <img src={img} alt="" />
      <p>
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
}

export default Schedule;
