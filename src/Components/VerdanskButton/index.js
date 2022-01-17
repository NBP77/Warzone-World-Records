import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function VerdanskButton() {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/verdansk");
      }}
      className="verdansk-button"
    >
      VERDANSK
    </div>
  );
}

export default VerdanskButton;
