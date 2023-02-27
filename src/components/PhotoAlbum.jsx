import React from 'react';
import { Card } from './Cards';
import PhotoGallery from './PhotoGallery';

export default function PhotoAlbum(props) {

  return (
    <div>

      <div className='container'>
        <div className='row d-flex justify-content-md-around'>
          <Card
            imageUrl="/images/all-images-cover.jpg"
            title="All Images"
            linkUrl="album-name.html"
          />
          {/* <CardThumbnail title='Breakfast at Lakeside' url='./PhotoGallery' type='album' />
          <CardThumbnail title='Christmas in Cabo' url='./PhotoGallery' type='album' />
          <CardThumbnail title='Christmas in Cabo' url='./PhotoGallery' type='album' /> */}
        </div>
      </div>

    </div>
  );
}
