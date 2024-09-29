import React from "react";
import fiveStar from '../assets/images/illustration-five-stars.webp'

function Social() {
  return (
    <div className="social-container">
      <h2>Social Media <span>10x</span> <i>Faster</i> with AI </h2>
      <img src={fiveStar} alt="five star" />
      <p>Over 4,000 5-star reviews</p>
    </div>
  );
}

export default Social;
