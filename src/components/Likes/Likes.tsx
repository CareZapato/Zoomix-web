import React from "react";
import "./Likes.css";

import img_like2 from "../../img/like2.png"


type Props = {
  likes?: number;
  color?: string;
  guardarPregunta: () => void;
};

const Likes = ({ likes, color, guardarPregunta }: Props) => {

  const handleClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    guardarPregunta();
  }; 

  const filter = "opacity(0.53) drop-shadow(0 0 0 "+color+") brightness(3)";
  return (
    <div className="card-floating-likes" onClick={handleClick}>
      <div className="card-content">
        {/* <div className="likes-count" style={{color: color}}>{likes}</div> */}
        <img style={{filter: filter}} src={img_like2} />
      </div>
    </div>
  );
};

export default Likes;