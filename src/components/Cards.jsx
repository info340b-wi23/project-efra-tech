import React from "react";
export function Card({ imageUrl, title, linkUrl }) {

    const handleClick = () => {
        window.location.href = '/home/album-name';
      };
    

  return (
    <a href={linkUrl} onClick={handleClick}>
      <div className="card" onClick={handleClick}>
        <img src={imageUrl} className="card-img" alt="Card image" />
        <div className="card-img-overlay d-flex align-items-center">
          <p className="card-title text-center mx-auto">{title}</p>
        </div>
      </div>
    </a>
  );
}