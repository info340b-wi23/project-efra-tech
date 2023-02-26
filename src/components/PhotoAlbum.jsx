import React from 'react';

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


      <div className="container-main">
        <div className="card">
          <img src="images/all-images-cover.jpg" className="card-img" alt="album cover"/>
          <div className="card-img-overlay d-flex align-items-center">
            <p className="card-title text-center mx-auto">All Images</p>
          </div>
        </div>
        <div className="card">
          <img src="images/kids-album-cover1.jpg" className="card-img" alt="album cover"/>
          <div className="card-img-overlay d-flex align-items-center">
              <p className="card-title text-center mx-auto">Kids</p>
          </div>
        </div>
      </div>

    </div>
  );
}

function AlbumThumbnail(props) {
  return(
    <p>hello</p>
  );
}