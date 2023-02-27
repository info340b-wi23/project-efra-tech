import React, { useState } from 'react';
import { Card } from './Cards';

export default function CookBook(props) {

  const cards = [
    {
      imageUrl: "/images/baked-fish.jpeg",
      title: "Baked Fish with Parmesan Breadcrums",
      linkUrl: "",
    },
    {
      id: 2,
      imageUrl: "/images/pan-seared-tilapia.jpeg",
      title: "Pan Seared Tilapia",
      linkUrl: "",
    }
  ];

  const filteredCards = cards.filter((card) => card.title.toLowerCase().startsWith(props.searchQuery.toLowerCase()));

  return (
    <main class='container-main'>
      {filteredCards.map((card) => (
        <Card key={card.id} title={card.title} imageUrl={card.imageUrl} linkUrl="cook-book" />
      ))}
    </main>
  );
}
