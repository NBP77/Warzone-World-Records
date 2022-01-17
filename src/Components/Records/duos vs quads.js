import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function DuosVsQuadsV() {
  const DisplayDuosVsQuads = worldRecordsVerdansk.slice(8, 9).map((obj) => {
    return (
      <div className="col">
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.pictureOne} alt="SuperEvan the gamer"/>
          <img src={obj.pictureTwo} alt="Newbz the gamer"/>
          <div>{obj.name}</div>
          <div>{obj.kills}</div>
          <div>{obj.gameplay}</div>
          <div>{obj.date}</div>
        </div>
      </div>
    );
  });

  return <div className="row ">{DisplayDuosVsQuads}</div>;
}

export default DuosVsQuadsV;