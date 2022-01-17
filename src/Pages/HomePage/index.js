import React from "react";
import "./style.css";
import VerdanskButton from "../../Components/VerdanskButton";
import CalderaButton from "../../Components/CalderaButton";

function HomePage() {
  return (
    <div className="homepage">
      <div className="home-title">
        WARZONE WORLD RECORDS
      </div>
      <div className="button-container">
        <VerdanskButton />
        <CalderaButton />
      </div>
    </div>
  );
}

export default HomePage;
