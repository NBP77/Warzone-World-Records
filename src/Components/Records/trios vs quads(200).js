import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function TriosVsQuads200V() {
  const DisplayTriosVsQuads200 = worldRecordsVerdansk.slice(10, 11).map((obj) => {
    return (
      <div className="col">
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.pictureOne} alt="Aydan the gamer"/>
          <img src={obj.pictureTwo} alt="Swagg the gamer"/>
          <img src={obj.pictureThree} alt="NICKMERCS the gamer"/>
          <div>{obj.name}</div>
          <div>{obj.kills}</div>
          <div>{obj.gameplay}</div>
          <div>{obj.date}</div>
        </div>
      </div>
    );
  });

  return <div className="row ">{DisplayTriosVsQuads200}</div>;
}

export default TriosVsQuads200V;
