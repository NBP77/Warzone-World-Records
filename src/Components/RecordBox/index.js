import React from "react";
import "./style.css";
import SolosV from "../Records/solos";
import DuosV from "../Records/duos";
import TriosV from "../Records/trios";
import QuadsV from "../Records/quads";
import SolosVsDuosV from "../Records/solo vs duos";
import SolosVsTriosV from "../Records/solo vs trios";
import SolosVsQuadsV from "../Records/solo vs quads";
import DuosVsTriosV from "../Records/duos vs trios";
import DuosVsQuadsV from "../Records/duos vs quads";
import TriosVsQuadsV from "../Records/trios vs quads";
import TriosVsQuads200V from "../Records/trios vs quads(200)";

function RecordBox() {
  return (
    <div className="container">
      <SolosV />
      <DuosV />
      <TriosV />
      <QuadsV />
      <SolosVsDuosV />
      <SolosVsTriosV />
      <SolosVsQuadsV />
      <DuosVsTriosV />
      <DuosVsQuadsV />
      <TriosVsQuadsV />
      <TriosVsQuads200V />
    </div>
  );
}

export default RecordBox;
