import React from "react";
import SMHandlers from "../assets/images/illustration-multiple-platforms.webp";

function Manage() {
  return (
    <div className="manage-container">
      <div>
        <img src={SMHandlers} alt="social media handlers" />
      </div>
      <h2>Manage multiple accounts and platforms.</h2>
    </div>
  );
}

export default Manage;
