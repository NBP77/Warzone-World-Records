import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function TriosV() {
  const DisplayTriosV = worldRecordsVerdansk.slice(2, 3).map((obj) => {
    return (
      <div className="col">
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.pictureOne} alt="Dizi the gamer"/>
          <img src={obj.pictureTwo} alt="xDaltt the gamer"/>
          <img src={obj.pictureThree} alt="DonLucky the gamer"/>
          <div>{obj.name}</div>
          <div>{obj.kills}</div>
          <div>{obj.gameplay}</div>
          <div>{obj.date}</div>
        </div>
      </div>
    );
  });

  return <div className="row ">{DisplayTriosV}</div>;
}

export default TriosV;
