import React from 'react';
import { CardThumbnail } from './Cards';

export default function PhotoAlbum(props) {
  return (
    <div>

      <div className='container'>
        <div className='row d-flex justify-content-md-around'>
          <CardThumbnail title='Breakfast at Lakeside'/>
          <CardThumbnail title='Christmas in Cabo'/>
          <CardThumbnail title='Christmas in Cabo'/>
        </div>
      </div>

    </div>
  );
}
