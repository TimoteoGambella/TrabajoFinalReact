import React from 'react';
import './NavBar.css';
import logo from './rose.png';
import CartWidget from './CartWidget';

export default  function NavBar(){

    return(
        <header>
            <div className="cabecero" id="cabecero">
                <a href="/"><h1 className="tituloI">ROSÉ</h1></a>
                <div>
                    <a href="/"><img src={logo} alt="LOGO"/></a>
                    <br/>
                    <a href="/">By Carolina</a>
                </div>
                <a href="/"><h1 className="tituloD">AROMAS</h1></a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light" id='navBar'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <a className="navbar-brand" href="/" id="referenciaMenu">Inicio</a>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/">Inicio</a>
                        <a className="nav-link" href="biografia.html">¿Quién soy?</a>
                        <a className="nav-link" href="productos.html">Sobre nuestros productos</a>
                        <a className="nav-link" href="tienda.html">Tienda</a>
                        <a className="nav-link" href="refill.html">Refill</a>
                    </div>
                </div>
                <CartWidget />
            </nav>
        </header>
    );
}