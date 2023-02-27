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
    <div className='card m-2 col-2 text-center py-5' onClick={handleClick}>
      {props.title}
    </div>
  );
}

