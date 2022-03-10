import React from 'react';
import './NavBar.css';
import logo from './rose.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

export default  function NavBar(){

    return(
        <header>
            <div className="cabecero" id="cabecero">
                <Link to={"/"}>
                    <h1 className="tituloI">ROSÉ</h1>
                </Link>
                <div>
                <Link to={"/"}>
                    <img src={logo} alt="LOGO"/>
                </Link>
                <br/>
                <Link to={"/"}>
                    <p>By Carolina</p>
                </Link>
                </div>
                <Link to={"/"}>
                    <h1 className="tituloD">AROMAS</h1>
                </Link>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light" id='navBar'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <a className="navbar-brand" href="/" id="referenciaMenu">Inicio</a>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <p className="nav-link">Inicio</p>
                        </Link>
                        <Link to={"/QuienSoy"} style={{ textDecoration: 'none' }}>
                            <p className="nav-link">¿Quién soy?</p>
                        </Link>
                        <Link to={"/NuestrosProd"} style={{ textDecoration: 'none' }}>
                            <p className="nav-link">Sobre nuestros productos</p>
                        </Link>
                        <Link to={`/Tienda/${"Todo"}`} style={{ textDecoration: 'none' }}>
                            <p className="nav-link">Tienda</p>
                        </Link>
                        <Link to={"/Refill"} style={{ textDecoration: 'none' }}>
                            <p className="nav-link">Refill</p>
                        </Link>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
}