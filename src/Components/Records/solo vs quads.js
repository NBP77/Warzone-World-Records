import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function SolosVsQuadsV() {
  const DisplaySolosVsQuads = worldRecordsVerdansk.slice(6, 7).map((obj) => {
    return (
      <div>
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.picture} alt="Mutex the gamer"/>
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

  return <div>{DisplaySolosVsQuads}</div>;
}

export default SolosVsQuadsV;
