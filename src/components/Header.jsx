import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header({ onSearch, currentProfile }) {
    const location = useLocation();
    const showJumbotron = location.pathname === "/home/photo-album" || location.pathname === "/home/cook-book";
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);
    };

    useEffect(() => {
        onSearch(query);
    }, [query, onSearch]);

    let details = {};
    if (location.pathname === "/home/photo-album") {
        details = { headerName: "Photo Album", description: "Archive your memories", image: "/images/album-page-cover.jpg" }
    }
    if (location.pathname === "/home/cook-book") {
        details = { headerName: "Cookbook", description: "One place for Family recipes", image: "/images/cookbook_real_image.jpeg" }
    }

    function Jumbotron(props) {
        const { headerName, description, image } = props.details;
        const link = `url('${image}')`
        return (
            <div className="container-head" style={{ backgroundImage: link }}>
                <div className="header-item">
                    <h1>{headerName}</h1>
                    <p className="motto"><i>{description}</i></p>
                </div>
                <div className="header-item">
                    <form className="album-modify d-flex">
                        <input key="search-input" className="form-control mt-4" type="text" placeholder="Search by name.." aria-label="Search" value={query} onChange={handleInputChange} />
                    </form>
                </div>
            </div>
        );
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">OurFamily</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/home/home-page">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home/calendar">Calendar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home/photo-album">Albums</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home/cook-book">Cookbook</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Welcome, {currentProfile}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/home/profile-select">Switch User</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            {showJumbotron && <Jumbotron details={details} />}
        </header>
    );
};