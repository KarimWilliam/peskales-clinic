import React from "react";

function CardItem({ therapyimg, words }) {
  return (
    <div className="card-container">
      <img
        className="card-img"
        width="200px"
        height="200px"
        src={therapyimg}
        alt="therputic image"
      />
      <div className="text-container">
        <p className="card-words">{words}</p>
      </div>
    </div>
  );
}

export default CardItem;
