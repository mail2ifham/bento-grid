import React from "react";
import createPost from '../assets/images/illustration-create-post.webp'

function Create() {
  return (
    <div className="Create-container">
      <h2>Create and schedule content <span>quicker.</span></h2>
      <img className="create-button" src={createPost} alt="button" />
    </div>
  );
}

export default Create;
