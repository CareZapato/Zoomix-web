import React from "react";
import "./Likes.css";
import img_like from "../../img/like.png"

type Props = {
  likes?: number;
};

const Likes = ({ likes }: Props) => {
  return (
    <div className="likes">
        {likes} <img src={img_like} />
    </div>
  );
};

export default Likes;