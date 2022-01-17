import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function TriosVsQuadsV() {
  const DisplayTriosVsQuads = worldRecordsVerdansk.slice(9, 10).map((obj) => {
    return (
      <div className="col">
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.pictureOne} alt="picNICK the gamer"/>
          <img src={obj.pictureTwo} alt="Oakleyboiii the gamer"/>
          <img src={obj.pictureThree} alt="ZLaner the gamer"/>
          <div>{obj.name}</div>
          <div>{obj.kills}</div>
          <div>{obj.gameplay}</div>
          <div>{obj.date}</div>
        </div>
      </div>
    );
  });

  return <div className="row ">{DisplayTriosVsQuads}</div>;
}

export default TriosVsQuadsV;
