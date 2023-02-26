import React from 'react';

export default function PhotoAlbum(props) {
  return (
    <div>
      <div className="container-head">
        <div className="header-item">
          <h1>Album Overview</h1>
          <p className="motto"><i>Archive your memories</i></p>
        </div>
        <div className="header-item">
          <form className="album-modify">
            <button type="button" id="add-album" className="btn btn-outline-success my-2 my-sm-0">+ New</button>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </div>

      <div className="photoalbum">
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
    </div>
  );
}

