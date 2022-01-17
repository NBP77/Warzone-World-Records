import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function SolosVsDuosV() {
  const DisplaySolosVsDuos = worldRecordsVerdansk.slice(4, 5).map((obj) => {
    return (
      <div className="col">
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.picture} alt="HusKerrs the gamer"/>
          <div>{obj.name}</div>
          <div>{obj.kills}</div>
          <div>{obj.gameplay}</div>
          <div>{obj.date}</div>
        </div>
      </div>
    );
  });

  return <div className="row ">{DisplaySolosVsDuos}</div>;
}

export default SolosVsDuosV;
