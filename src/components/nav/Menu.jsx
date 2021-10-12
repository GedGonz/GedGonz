import React from 'react'
import "./Menu.css";
export default function Menu() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">

                    <div className="navbar-brand" href="#inicio">
                        <a href="#inicio" className="text-black-50">GedGonz</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav p-2 ml-auto">
                        <li className="nav-item px-2">
                        <a className="nav-link" href="#inicio">INICIO</a>
                        </li>
                        <li className="nav-item px-2">
                        <a className="nav-link" href="#about">SOBRE MÍ</a>
                        </li>
                        <li className="nav-item px-2">
                        <a className="nav-link" href="#proyectSs">PROYECTOS</a>
                        </li>
                        <li className="nav-item px-2">
                        <a className="nav-link" href="https://gedgonz.github.io/CV/files/Curriculum%20Vitae.pdf">CV</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}
