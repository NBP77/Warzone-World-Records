import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function TriosVsQuads200V() {
  const DisplayTriosVsQuads200 = worldRecordsVerdansk.slice(10, 11).map((obj) => {
    return (
      <div>
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.pictureOne} alt="Aydan the gamer"/>
          <img src={obj.pictureTwo} alt="Swagg the gamer"/>
          <img src={obj.pictureThree} alt="NICKMERCS the gamer"/>
          <div>{obj.name}</div>
          <div>{obj.kills}</div>
          <iframe
            width="350"
            height="200"
            src={obj.gameplay}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div>{obj.date}</div>
        </div>
      </div>
    );
  });

  return <div>{DisplayTriosVsQuads200}</div>;
}

export default TriosVsQuads200V;
