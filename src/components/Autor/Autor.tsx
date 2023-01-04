import React from "react";
import "./Autor.css";

type Props = {
  autor: string;
};

const Autor = ({ autor }: Props) => {
  return (
    <div className="autor">
      Creador: {autor}
    </div>
  );
};

export default Autor;