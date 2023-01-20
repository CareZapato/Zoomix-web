import React from "react";
import "./Likes.css";
import img_like from "../../img/like.png"
import img_like2 from "../../img/like2.png"


type Props = {
  likes?: number;
  color?: string;
};


const Likes = ({ likes, color }: Props) => {
  const filter = "opacity(0.5) drop-shadow(0 0 0 "+color+") brightness(3)";
  return (
    <div className="likes card-floating">
      <div className="card-content">
        <div className="likes-count" style={{color: color}}>{likes}</div>
        <img style={{filter: filter}} src={img_like2} />
      </div>
    </div>
  );
};

export default Likes;