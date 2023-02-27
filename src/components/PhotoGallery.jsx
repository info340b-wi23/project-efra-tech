import React from 'react';

export default function PhotoGallery(props) {
  return (
    <main>
      <div className="gallery">
        <div className="gallery-item">
          <img src="/images/random-family-image1.jpg" alt="a random family image" />
        </div>
        <div className="gallery-item">
          <img src="/images/random-family-image2.jpg" alt="a random family image" />
        </div>
        <div className="gallery-item">
          <img src="/images/vacation-album-cover.jpg" alt="a random family image" />
        </div>
        <div className="gallery-item">
          <img src="/images/kids-album-cover1.jpg" alt="a random family image" />
        </div>
        <div className="gallery-item">
          <img src="/images/all-images-cover.jpg" alt="a random family image" />
        </div>
        <div className="gallery-item">
          <img src="/images/kids-album-image.jpg" alt="a random family image" />
        </div>
      </div>
      <a href="" className="material-icons floating-btn">add</a>
    </main>
  );
}