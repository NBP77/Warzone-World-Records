import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function SolosVsDuosV() {
  const DisplaySolosVsDuos = worldRecordsVerdansk.slice(4, 5).map((obj) => {
    return (
      <div>
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.picture} alt="HusKerrs the gamer"/>
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

  return <div>{DisplaySolosVsDuos}</div>;
}

export default SolosVsDuosV;
