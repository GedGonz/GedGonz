import React, { useState } from 'react'
import { Link } from "react-scroll";
import "./Menu.css";



export default function Menu() {

    var [getToggle, setToggle] = useState(false);

    function toggleMenu(){
        console.log("emtra");
        setToggle(!getToggle);
      }
    const show = (getToggle) ? "show" : "" ;


    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">

                    <div className="navbar-brand">
                        <Link activeClass="active" className="text-black-50" to="inicio" spy={true} smooth={true} duration={800} >
                            GedGonz
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
                        <a className="nav-link" href="https://gedgonz.github.io/CV/files/Curriculum%20Vitae.pdf">CV </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}
