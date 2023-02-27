import React from 'react';
import { CardThumbnail } from './Cards';
import PhotoGallery from './PhotoGallery';

export default function PhotoAlbum(props) {

  return (
    <div>

      <div className='container'>
        <div className='row justify-content-md-around mt-5'>
          <CardThumbnail title='Breakfast at Lakeside' url='./PhotoGallery' type='album'/>
          <CardThumbnail title='Christmas in Cabo' url='./PhotoGallery' type='album'/>
          <CardThumbnail title='Christmas in Cabo' url='./PhotoGallery' type='album'/>
        </div>
      </div>

    </div>
  );
}

export function AddAlbumButton(props) {
  function handleClick(event){}
  return (
    <button type="button" id="add-album" className="btn btn-outline-success my-2 my-sm-0" onClick={handleClick}>
      + New
    </button>
  );
}