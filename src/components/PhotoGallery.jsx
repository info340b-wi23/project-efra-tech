import React from 'react';

export default function PhotoGallery(props) {
  return(
    <div>
      <div class="gallery">
        <div class="gallery-item">
          <img src="../images/random-family-image1.jpg" alt="a random family image"/>
        </div>
        <div class="gallery-item">
          <img src="../images/random-family-image2.jpg" alt="a random family image"/>
        </div>
        <div class="gallery-item">
          <img src="../images/vacation-album-cover.jpg" alt="a random family image"/>
        </div>
        <div class="gallery-item">
          <img src="../images/kids-album-cover1.jpg" alt="a random family image"/>
        </div>
        <div class="gallery-item">
          <img src="../images/all-images-cover.jpg" alt="a random family image"/>
        </div>
        <div class="gallery-item">
          <img src="../images/kids-album-image.jpg" alt="a random family image"/>
        </div>
      </div>
      <a href="" class="material-icons floating-btn">add</a>
    </div>
  );
}