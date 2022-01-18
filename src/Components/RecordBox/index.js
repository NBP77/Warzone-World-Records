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
      <div className="row">
        <div className="col">
          <SolosV />
        </div>
        <div div className="col">
          <DuosV />
        </div>
        <div div className="col">
          <TriosV />
        </div>
      </div>
      <div className="row">
        <div div className="col">
          <QuadsV />
        </div>
        <div div className="col">
          <SolosVsDuosV />
        </div>
        <div div className="col">
          <SolosVsTriosV />
        </div>
      </div>
      <div className="row">
        <div div className="col">
          <SolosVsQuadsV />
        </div>
        <div div className="col">
          <DuosVsTriosV />
        </div>
        <div div className="col">
          <DuosVsQuadsV />
        </div>
      </div>
      <div className="row">
        <div div className="col">
          <TriosVsQuadsV />
        </div>
        <div div className="col">
          <TriosVsQuads200V />
        </div>
      </div>
    </div>
  );
}

export default RecordBox;
