import React from 'react';
import { CardThumbnail } from './Cards';
import PhotoGallery from './PhotoGallery';

export default function PhotoAlbum(props) {

  return (
    <div>
      <div className="container-head">
        <div className="header-item p-4 ms-3">
          <h1>Album Overview</h1>
          <p className="motto"><i>Archive your memories</i></p>
        </div>
        <div className='d-flex mx-3 ms-5'>
          <div className='header-item'>
            <button type="button" id="add-album" className="btn btn-primary my-2 my-sm-0 p-3">+ New</button>
          </div>
          <div className="header-item px-5">
            <input className="form-control my-3" type="search" placeholder="Search" aria-label="Search"/>
          </div>
        </div>
      </div>

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
