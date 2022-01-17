import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function CalderaButton() {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/caldera");
      }}
      className="caldera-button"
    >
      CALDERA
    </div>
  );
}

export default CalderaButton;
