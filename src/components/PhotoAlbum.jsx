import React from 'react';
import { CardThumbnail } from './Cards';
import PhotoGallery from './PhotoGallery';

export default function PhotoAlbum(props) {

  return (
    <div>

      <div className='container'>
        <div className='row d-flex justify-content-md-around'>
          <CardThumbnail title='Breakfast at Lakeside' url='./PhotoGallery' type='album'/>
          <CardThumbnail title='Christmas in Cabo' url='./PhotoGallery' type='album'/>
          <CardThumbnail title='Christmas in Cabo' url='./PhotoGallery' type='album'/>
        </div>
      </div>

    </div>
  );
}
