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
                                <img className="picture" src="https://scontent.fmga4-1.fna.fbcdn.net/v/t31.18172-8/27173987_10215533812245529_6245819946859810664_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=GOeSirRp0qcAX-wLbUL&_nc_ht=scontent.fmga4-1.fna&oh=18eae98b946ae547623fda6370d368c9&oe=618BC540" alt="" />

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

                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="fa fa-chevron-right "></i> <strong>edad:</strong>
                                                <span id="edad"></span>
                                            </li>
                                            <li><i className="fa fa-chevron-right"></i> <strong>telefono:</strong>
                                                <span>+505 57028362</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="fa fa-chevron-right"></i> <strong>ciudad:</strong> Masaya, Nicaragua</li>
                                            <li><i className="fa fa-chevron-right"></i> <strong>Email:</strong> gedgonz7@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>



                        </div>
                    </div>
                </div>

                <div className="row informationme">

                    <div className="col-md-3">

                        
                        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_xsnsvpbs.json" background="transparent" speed="1" style={{width: 300, height: 300}} loop autoplay></lottie-player>


                    </div>
                    <div className="col-md-9">
                        <div>
                            <p className="title_info_one">Conocimientos en tecnologías </p>
                            <hr/>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-center">
                                <p className="title_info">Lenguajes</p>
                                <i className="devicon-csharp-plain-wordmark colored"></i>
                                <i className="devicon-java-plain-wordmark colored"></i>
                                <i className="devicon-typescript-original colored"></i>
                                <i className="devicon-javascript-plain colored"></i>
                            </div>

                            <div className="col-lg-3 text-center">
                                <p className="title_info">Front-End</p>
                                <i className="devicon-angularjs-plain colored"></i>
                                <i className="devicon-bootstrap-plain colored"></i>
                                <i className="devicon-html5-plain-wordmark colored"></i>
                                <i className="devicon-css3-plain-wordmark colored"></i>

                            </div>

                            <div className="col-lg-3 text-center">
                                <p className="title_info">Back-End</p>
                                <i className="devicon-nodejs-plain colored"></i>
                                <i className="devicon-express-original colored"></i>
                                <i className="devicon-dotnetcore-plain colored"></i>
                                <i className="devicon-mongodb-plain-wordmark colored"></i>
                                <i className="devicon-mysql-plain-wordmark colored"></i>
                                <i className="devicon-redis-plain colored"></i>
                                <i className="devicon-microsoftsqlserver-plain colored"></i>
                                
                                
                                
                            </div>
                            <div className="col-lg-3 text-center">
                                <p className="title_info">Tools</p>
                                <i className="devicon-git-plain colored"></i>
                                <i className="devicon-visualstudio-plain colored"></i>
                                <i className="devicon-vscode-plain colored"></i>
                                <i className="devicon-github-plain colored"></i>
                                <i className="devicon-docker-plain colored"></i>
                                

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
