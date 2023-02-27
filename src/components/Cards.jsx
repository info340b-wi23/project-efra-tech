import React from 'react';

export function CardThumbnail(props) {
  return(
    <div className='card m-2' onClick={props.openCardFunction}>
      <h1 className="card-title text-center mx-auto">{props.title}</h1>
    </div>
  );
}