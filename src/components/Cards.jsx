import React from 'react';
import { Navigate } from 'react-router-dom';


export function CardThumbnail(props) {
  function handlePhotoClick(){
    window.location.replace('http://localhost:3000/home/photo-gallery');
  }

  return(
    <div className='card m-2' onClick={handlePhotoClick}>
      <h1 className="card-title text-center mx-auto">{props.title}</h1>
    </div>
  );
}