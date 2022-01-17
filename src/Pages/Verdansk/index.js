import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import RecordBox from "../../Components/RecordBox";

function Verdansk() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="verdansk-header">
        <div>VERDANSK</div>
      </div>

      <RecordBox />
    </div>
  );
}

export default Verdansk;
