import React from 'react';
import { Card } from './Cards';

export default function CookBook(props) {

  return (
    <main class='container-main'>
        <Card
          imageUrl="/images/baked-fish.webp"
          title="Baked Fish with Parmesan Breadcrumbs"
          linkUrl="/home/cook-book"
        />
        <Card
          imageUrl="/images/pan-seared-tilapia.jpeg"
          title="Pan-Seared Tilapia"
          linkUrl="/home/cook-book"
        />
    </main>
  );
}
