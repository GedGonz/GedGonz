import React from 'react'


import "./Aboutme.css";

export default function Aboutme() {
    return (
        <section id="about" className="portfolio-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="container_image">
                            <div className="backgroundimg">
                            <img className="picture" src={process.env.PUBLIC_URL+ '/images/me.jpg'} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="about">
                            <h3>👋 Hola, Soy <span>Gerald González</span> </h3>
                                <p className="text-justify">
                                    Una persona apasionada que se esfuerza por construir y aplicar algoritmos para resolver problemas de la industria del mundo real.
                                </p>
                                <p className="text-justify">
                                    Me dedico al desarrollo de software y me centro en las tecnologias de dotNet y Javascript. he trabajado con el Framework Angular y NodeJS. En dotNet trabajo con tecnologias actuales y con buenas practicas de programación, patrones, arquitecturas limpia y
                                    codigo limpio o CleanCode
                                </p>
                                <p className="text-justify">
                                    Actualmente me encuentro estudiando react, en ocasiones escribo algún artículo donde enseño lo aprendido en la comunidad <strong>dev.to</strong>
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="fa fa-chevron-right "></i> <strong>Nacionalidad:</strong>
                                                <span>Nicaragünse</span>
                                            </li>
                                            <li><i className="fa fa-chevron-right"></i> <strong>ciudad:</strong> <span>Masaya</span></li>
                                            {/* <li><i className="fa fa-chevron-right"></i> <strong>telefono:</strong>
                                                <span>+505 57028362</span>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            {/* <li><i className="fa fa-chevron-right"></i> <strong>ciudad:</strong> Masaya, Nicaragua</li> */}
                                            {/* <li><i className="fa fa-chevron-right"></i> <strong>Email:</strong> gedgonz7@gmail.com</li> */}
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="row informationme">

                    <div className="col-md-12">
                        <div>
                            <p className="title_info_one">Conocimientos en tecnologías </p>
                            <hr/>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-center">
                                <p className="title_info">Lenguajes</p>
                                <i className="devicon-csharp-plain-wordmark "></i>
                                <i className="devicon-java-plain-wordmark "></i>
                                <i className="devicon-typescript-original "></i>
                                <i className="devicon-javascript-plain "></i>
                            </div>

                            <div className="col-lg-3 text-center">
                                <p className="title_info">Front-End</p>
                                <i className="devicon-angularjs-plain "></i>
                                <i className="devicon-bootstrap-plain "></i>
                                <i className="devicon-html5-plain-wordmark "></i>
                                <i className="devicon-css3-plain-wordmark "></i>

                            </div>

                            <div className="col-lg-3 text-center">
                                <p className="title_info">Back-End</p>
                                <i className="devicon-nodejs-plain "></i>
                                <i className="devicon-express-original "></i>
                                <i className="devicon-dotnetcore-plain "></i>
                                <i className="devicon-mongodb-plain-wordmark "></i>
                                <i className="devicon-mysql-plain-wordmark "></i>
                                <i className="devicon-redis-plain "></i>
                                <i className="devicon-microsoftsqlserver-plain "></i>
                                
                            </div>
                            <div className="col-lg-3 text-center">
                                <p className="title_info">Tools</p>
                                <i className="devicon-git-plain "></i>
                                <i className="devicon-visualstudio-plain "></i>
                                <i className="devicon-vscode-plain "></i>
                                <i className="devicon-github-plain "></i>
                                <i className="devicon-docker-plain "></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>             

            <div className="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fillOpacity="1" d="M0,192L1440,0L1440,320L0,320Z"></path>
                </svg>
            </div>

    </section>
    )
}
