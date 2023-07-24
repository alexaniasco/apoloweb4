import React from "react";

export const Banner = () => {
  return (
    <div className="banner_main">
      <div style={{ marginLeft: "80px", fontSize: "20px" }}>
        <h5 style={{ color: "white" }}>ApoloWeb evolution</h5>
      </div>
      <div>
        <p
          className="idea"
          style={{ marginRight: "80px", textAlign: "center", color: "white" }}
        >
          No es excluyente una mente brillante basta una idea que lo sea
        </p>
      </div>
    </div>
  );
};
