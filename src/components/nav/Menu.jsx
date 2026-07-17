import React, { useState } from 'react'
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useSiteContent } from "../../context/SiteContentContext";
import "./Menu.css";



export default function Menu({ theme, toggleTheme }) {
    const { profile } = useSiteContent();
    const brand = profile?.brand || "GedGonz";

    var [getToggle, setToggle] = useState(false);

    function toggleMenu(){
        setToggle(!getToggle);
      }
    const show = (getToggle) ? "show" : "" ;
    const isDark = theme === "dark";


    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">

                    <div className="navbar-brand">
                        <Link activeClass="active" className="text-black-50" to="inicio" spy={true} smooth={true} duration={800} >
                            {brand}
                        </Link> 
                    </div>
                    <button onClick={ toggleMenu } className="navbar-toggler" type="button" data-toggle="collapse" >
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={"collapse navbar-collapse " + show}>
                    <ul className="navbar-nav p-2 ml-auto">
                        <li className="nav-item px-2">
                            <Link activeClass="active" className="nav-link" to="inicio" spy={true} smooth={true} duration={900} >
                                INICIO
                            </Link> 
                        </li>
                        <li className="nav-item px-2">
                            <Link activeClass="active" className="nav-link" to="about" spy={true} smooth={true} duration={900} >
                                SOBRE MÍ
                            </Link> 
                        </li>
                        <li className="nav-item px-2">
                            <Link activeClass="active" className="nav-link" to="proyects" spy={true} smooth={true} duration={900} >
                                PROYECTOS
                            </Link> 
                        </li>
                        <li className="nav-item px-2">
                            <Link activeClass="active" className="nav-link" to="interests" spy={true} smooth={true} duration={900} >
                                INTERESES
                            </Link> 
                        </li>
                        <li className="nav-item px-2">
                            <RouterLink className="nav-link" to="/cv">
                                CV
                            </RouterLink>
                        </li>
                        <li className="nav-item px-2">
                            <button
                                type="button"
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
                                title={isDark ? "Modo claro" : "Modo oscuro"}
                            >
                                <i className={isDark ? "fa fa-sun-o" : "fa fa-moon-o"}></i>
                            </button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}
