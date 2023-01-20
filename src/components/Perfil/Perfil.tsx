import React, { useState } from 'react';
import './Perfil.css'
interface Props {
  userName: string;
  userImage: string;
  userQuestions: number;
  userLikes: number;
}

const Perfil: React.FC<Props> = ({ userName, userImage, userQuestions, userLikes }) => {
  return (
    <div className="profile-container">
      <img className="profile-img" src={userImage} alt={userName} />
      <p className="profile-name">Nombre de usuario: {userName}</p>
      <div className="profile-stats">
        <p className="profile-stat">Preguntas totales: {userQuestions}</p>
        <p className="profile-stat">Likes totales: {userLikes}</p>
      </div>
    </div>
  );
};

export default Perfil;