import React from "react";
import { useLocation } from "react-router-dom";

export default function Header(props) {
    const location = useLocation();
    const showJumbotron = location.pathname === "/home/photo-album" || location.pathname === "/home/cook-book";
    let details = {};
    if(location.pathname === "/home/photo-album") {
        details = {headerName:"Photo Album", description: "Archive your memories", image: "/images/album-page-cover.jpg"}
    }
    if(location.pathname === "/home/cook-book") {
        details = {headerName:"Cook Book", description: "One place for Family recipes", image: "/images/cookbook_real_image.jpeg"}
    }

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
                                Welcome, {props.profile}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/home/profile-select">Switch User</a>
                                <a className="dropdown-item" href="#">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            {showJumbotron && <Jumbotron details={details}/>}
        </header>
    );
};

function Jumbotron(props) {
    const {headerName, description, image} = props.details;
    const link = `url('${image}')`
    console.log(link)
    return (
        <div className="container-head" style={{ backgroundImage: link }}>
            <div className="header-item">
                <h1>{headerName}</h1>
                <p className="motto"><i>{description}</i></p>
            </div>
            <div className="header-item">
                <form className="album-modify">
                    <button type="button" id="add-album" className="btn btn-outline-success my-2 my-sm-0">+ New</button>
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
        </div>
    );
}