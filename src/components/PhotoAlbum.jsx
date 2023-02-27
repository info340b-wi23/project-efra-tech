import React from 'react';
import { Card } from './Cards';
import PhotoGallery from './PhotoGallery';

export default function PhotoAlbum(props) {

  return (
    <main class='container-main'>
        <Card
          imageUrl="/images/all-images-cover.jpg"
          title="All Images"
          linkUrl="album-name.html"
        />
        <Card
          imageUrl="/images/kids-album-cover1.jpg"
          title="Kids Album"
          linkUrl="album-name.html"
        />
        <Card
          imageUrl="/images/vacation-album-cover.jpg"
          title="Vacation Album"
          linkUrl="album-name.html"
        />
        
        {/* <CardThumbnail title='Breakfast at Lakeside' url='./PhotoGallery' type='album' />
          <CardThumbnail title='Christmas in Cabo' url='./PhotoGallery' type='album' />
          <CardThumbnail title='Christmas in Cabo' url='./PhotoGallery' type='album' /> */}
    </main>
  );
}
