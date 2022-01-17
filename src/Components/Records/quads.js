import React from "react";
// import "./style.css";
import worldRecordsVerdansk from "../../Data/verdanskRecords";
import 'bootstrap/dist/css/bootstrap.min.css';

function QuadsV() {
  const DisplayQuadsV = worldRecordsVerdansk.slice(3, 4).map((obj) => {
    return (
      <div className="col">
        <div className="record-card">
          <div className="recordType">{obj.record}</div>
          <img src={obj.pictureOne} alt="Aydan the gamer"/>
          <img src={obj.pictureTwo} alt="Almond the gamer"/>
          <img src={obj.pictureThree} alt="ScummN the gamer"/>
          <img src={obj.pictureFour} alt="Newbz the gamer"/>
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

  return <div className="row ">{DisplayQuadsV}</div>;
}

export default QuadsV;
