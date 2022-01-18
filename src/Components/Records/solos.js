import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import "bootstrap/dist/css/bootstrap.min.css";

function SolosV() {
  const DisplaySolosV = worldRecordsVerdansk.slice(0, 1).map((obj) => {
    return (
      <div className="record-card">
        <div className="recordType">{obj.record}</div>
        <img className="inewwz-pic" src={obj.picture} alt="iNewwz the gamer" />
        <div className="gamers-name">{obj.name}</div>
        <div className="kills">{obj.kills}</div>
        <div className="date">{obj.date}</div>
        <iframe
          width="350"
          height="200"
          src={obj.gameplay}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    );
  });

  return <div>{DisplaySolosV}</div>;
}

export default SolosV;
