import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function DuosVsQuadsV() {
  const DisplayDuosVsQuads = worldRecordsVerdansk.slice(8, 9).map((obj) => {
    return (
      <div>
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.pictureOne} alt="SuperEvan the gamer"/>
          <img src={obj.pictureTwo} alt="Newbz the gamer"/>
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

  return <div>{DisplayDuosVsQuads}</div>;
}

export default DuosVsQuadsV;
