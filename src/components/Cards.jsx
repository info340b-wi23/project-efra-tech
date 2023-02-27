import React from 'react';
import { Navigate } from 'react-router-dom';


export function CardThumbnail(props) {
  function handleClick(){
    if (props.type === 'album'){
      window.location.replace('http://localhost:3000/home/photo-gallery');
    } else if (props.type === 'recipe') {
      console.log('recipe');
    }
  }

  return(
    <div className='card m-2' onClick={handleClick}>
      <h1 className="card-title text-center mx-auto">{props.title}</h1>
    </div>
  );
}

