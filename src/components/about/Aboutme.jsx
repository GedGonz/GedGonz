import React from 'react'


import "./Aboutme.css";

export default function Aboutme() {
    return (
        <section id="about" className="portfolio-section">
            <div className="container contains-aboutme">
                <div className="row reveal">
                    <div className="col-md-3">
                        <div className="container_image">
                            <div className="backgroundimg">
                            <img className="picture" src={process.env.PUBLIC_URL+ '/images/me.jpg'} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="about">
                            <h3>👋 Hola, soy <span>Gerald González</span> </h3>
                                <p className="text-justify">
                                    Desarrollador de software apasionado por convertir problemas reales en soluciones simples y bien construidas. Disfruto entender el negocio detrás de cada proyecto para diseñar el software que de verdad lo resuelve.
                                </p>
                                <p className="text-justify">
                                    Trabajo principalmente con .NET, Java y JavaScript, y con frameworks como Spring Boot y Angular. Cuido cada línea aplicando buenas prácticas, patrones de diseño, arquitectura limpia y Clean Code, buscando que lo que construyo sea legible, escalable y fácil de mantener.
                                </p>
                                <p className="text-justify">
                                    Además, integro herramientas de inteligencia artificial como ChatGPT, Claude, Gemini y OpenCode en mi flujo diario para acelerar el desarrollo, explorar soluciones y aprender más rápido, siempre sin sacrificar la calidad del código.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="fa fa-chevron-right "></i> <strong>Nacionalidad:</strong>
                                                <span>Nicaragünse</span>
                                            </li>
                                            <li><i className="fa fa-chevron-right"></i> <strong>ciudad:</strong> <span>Masaya</span></li>

                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>

                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="row informationme reveal">

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
                                
                                <i className="devicon-spring-original "></i>
                                <i className="devicon-nodejs-plain "></i>
                                <i className="devicon-express-original "></i>
                                <i className="devicon-dotnetcore-plain "></i>
                                <i className="devicon-mongodb-plain-wordmark "></i>
                                <i className="devicon-mysql-plain-wordmark "></i>
                                <i className="devicon-redis-plain "></i>
                                <i className="devicon-microsoftsqlserver-plain "></i>
                                <i className="devicon-postgresql-plain"></i>
                                
                            </div>
                            <div className="col-lg-3 text-center">
                                <p className="title_info">Tools</p>
                                <i className="devicon-jenkins-line"></i>
                                <i className="devicon-git-plain "></i>
                                <i className="devicon-visualstudio-plain "></i>
                                <i className="devicon-github-plain "></i>
                                <i className="devicon-gitlab-plain"></i>
                                <i className="devicon-docker-plain "></i>
                                <i className="devicon-linux-plain"></i>
                                <i className="devicon-nginx-original"></i>
                                <i className="devicon-rabbitmq-original"></i>
                            </div>
                            
                        </div>

                        <div className="ai-tools">
                            <p className="title_info">IA & Productividad</p>
                            <div className="ai-chips">
                                <span className="ai-chip">ChatGPT</span>
                                <span className="ai-chip">Claude</span>
                                <span className="ai-chip">Gemini</span>
                                <span className="ai-chip">OpenCode</span>
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
