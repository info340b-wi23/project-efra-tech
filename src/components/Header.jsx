import React from "react";
import { useLocation } from "react-router-dom";
import { AddAlbumButton } from "./PhotoAlbum";

export default function Header(props) {
    const location = useLocation();
    const showJumbotron = location.pathname === "/home/photo-album" || location.pathname === "/home/cook-book";
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Our Family</a>
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
                            <a className="nav-link" href="/home/cook-book">Cook Book</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Welcome, Max
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/home/profile-select">Switch User</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            {showJumbotron && <Jumbotron />}
        </header>
    );
};

function Jumbotron() {
    return (
        <div className="container-head">
            <div className="header-item">
                <h1>Album Overview</h1>
                <p className="motto"><i>Archive your memories</i></p>
            </div>
            <div className="header-item">
                <form className="album-modify">
                    {/* <AddAlbumButton /> */}
                    <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#uploadModal" data-whatever="@mdo"> + New</button>
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
        </div>

    );

}