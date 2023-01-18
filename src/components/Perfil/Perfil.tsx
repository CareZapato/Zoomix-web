import React, { useState } from 'react';

interface Props {
  userName: string;
  userImage: string;
  userQuestions: number;
  userLikes: number;
}

const Perfil: React.FC<Props> = ({ userName, userImage, userQuestions, userLikes }) => {
  return (
    <div>
      <img src={userImage} alt={userName} />
      <p>Nombre de usuario: {userName}</p>
      <p>Preguntas totales: {userQuestions}</p>
      <p>Likes totales: {userLikes}</p>
    </div>
  );
};

export default Perfil;