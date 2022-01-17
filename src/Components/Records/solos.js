import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function SolosV() {
  const DisplaySolosV = worldRecordsVerdansk.slice(0, 1).map((obj) => {
    return (
      <div className="col">
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.picture} alt="iNewwz the gamer"/>
          <div>{obj.name}</div>
          <div>{obj.kills}</div>
          <div>{obj.gameplay}</div>
          <div>{obj.date}</div>
        </div>
      </div>
    );
  });

  return <div className="row ">{DisplaySolosV}</div>;
}

export default SolosV;
