import React from "react";
import { Link } from 'react-router-dom';


export function Card({ imageUrl, title, albumName }) {

    const handleClick = () => {
        window.location.href = `/photo-album/${albumName}`;
    };

    return (
        <div className="card">
            <Link to={`/home/photo-album/${albumName}`}>
                <img src={imageUrl} className="card-img" alt="Card image" />
                <div className="card-img-overlay d-flex align-items-center">
                    <p className="card-title text-center mx-auto">{title}</p>
                </div>
            </Link>
        </div>
    );
}