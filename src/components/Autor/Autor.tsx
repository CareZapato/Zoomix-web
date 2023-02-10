import React from "react";
import "./Autor.css";
import author from "../../img/author.png"
type Props = {
  autor?: string;
  color?: string;
};

const Autor = ({ autor, color }: Props) => {
  const filter = "opacity(0.5) drop-shadow(0 0 0 "+color+") brightness(3)";
  return (
    <div className="card-floating-author">
      <div className="card-content">
        <img style={{filter: filter}} src={author} />
        <div className="author-name" style={{color: color}}>{autor}</div>
      </div>
    </div>
  );
};

export default Autor;