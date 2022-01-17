import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function SolosVsQuadsV() {
  const DisplaySolosVsQuads = worldRecordsVerdansk.slice(6, 7).map((obj) => {
    return (
      <div className="col">
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.picture} alt="Mutex the gamer"/>
          <div>{obj.name}</div>
          <div>{obj.kills}</div>
          <div>{obj.gameplay}</div>
          <div>{obj.date}</div>
        </div>
      </div>
    );
  });

  return <div className="row ">{DisplaySolosVsQuads}</div>;
}

export default SolosVsQuadsV;
