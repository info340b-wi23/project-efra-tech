import React from "react";
import { Link } from 'react-router-dom';


export function RecipeCards({ id, recipeName }) {

    const handleClick = () => {
        window.location.href = `/cook-book/${recipeName}`;
    };

    return (
        <div className="recipe-card card">
          <Link to={`/home/cook-book/${recipeName}`}>
            <p className="card-title text-center mx-auto">{recipeName}</p>
          </Link>
        </div>
    );
}