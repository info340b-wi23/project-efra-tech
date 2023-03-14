import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";


export function Card({ imageUrl, title, albumName }) {

    const handleClick = () => {
        window.location.href = `/photo-album/${albumName}`;
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src={imageUrl} className="card-img" alt="Card image" />
            <div className="card-img-overlay d-flex align-items-center">
                <p className="card-title text-center mx-auto">{title}</p>
                <Routes>
                    <Route path="/photo-album/:albumName" element={<PhotoGallery />} />
                </Routes>
            </div>
        </div>
    );
}