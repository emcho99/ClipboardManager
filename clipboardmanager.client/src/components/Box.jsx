import React from "react";

const Box = () => {
  return (
    <div className="d-flex justify-content-start">
      <div
        className="bg-primary text-white d-flex justify-content-center align-items-center"
        style={{ width: "200px", height: "300px" }}
      >
        Box Content
      </div>
    </div>
  );
};

export default Box;
