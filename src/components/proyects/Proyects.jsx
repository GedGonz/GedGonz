import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import  "./Proyects.css";
export default function Proyects() {
    return (
        <section id="proyects">
            <div className="container">
                <br/> <br/> <br/> <br/>
                <div className="about text-center">
                    <h3>Estos son algunos de mis proyectos</h3>
                </div>
                <br/> <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="images-right">
                            <img className="picture_proyect" src="https://repository-images.githubusercontent.com/351929749/fd248500-9de6-11eb-94df-a0ad560e771c" alt="" />
                        </div>
                        <div className="contents-left">
                            <p className="title_proyect"><span>Blue</span>Bank </p>
                            <p className="text-justify">
                            Estas es una pequeña aplicación web que realiza la gestión de cuenta de ahorro de un banco que se conecta para consumir los datos de una API desarrollada en DotNetCore,
                            el backend utiliza una arquitectura limpia, con patrones de diseño, con los principios DDD, gestión de logs y el uso de JWT
                            </p>
                            <div className="text-center Detailproyect">
                                <i className="devicon-typescript-original colored"></i>
                                <i className="devicon-angularjs-plain colored"></i>
                                <i className="devicon-dotnetcore-plain colored"></i>
                            </div>
                            <br/>
                            <div className="text-center">
                                <a href="https://github.com/GedGonz/BlueBank" className="btn btn-light btn-lg "><i className="fa fa-github"></i></a>
                                <a href="https://bluebankapp.herokuapp.com" className="btn btn-light btn-lg "><i className="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/> <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="images-left">
                            <img className="picture_proyect" src="https://repository-images.githubusercontent.com/223289504/594c5d00-bc4a-11ea-932b-2273e258bb6e" alt="" />
                        </div>
                        <div className="contents-right">
                            <p className="title_proyect"><span>Funko</span>Pop</p>
                            <p className="text-justify">
                            Esta es una pequeña aplicación con una landingpage donde muestra un Carrusel de productos Funko Pop,
                            así mismo un buscador en donde se demuestra la comunicación entre componentes, esta consume una API creada en Node.js
                            </p>
                            <div className="text-center Detailproyect">
                                <i className="devicon-typescript-original colored"></i>
                                <i className="devicon-angularjs-plain colored"></i>
                                <i className="devicon-mongodb-plain colored"></i>
                            </div>
                            <br/>
                            <div className="text-center">
                                <a href="https://github.com/GedGonz/TiendaFunkoPOP" className="btn btn-light btn-lg "><i className="fa fa-github"></i></a>
                                <a href="https://funkopopmarket.herokuapp.com" className="btn btn-light btn-lg "><i className="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/> <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="images-right">
                            <img className="picture_proyect" src="https://repository-images.githubusercontent.com/381210182/c9263997-0b9e-4fab-ab46-61432263b5d1" alt="" />
                        </div>
                        <div className="contents-left">
                            <p className="title_proyect"><span>Rick</span>&Morty </p>
                            <p className="text-justify">
                            Esta es una pequeña aplicación donde hace la búsqueda de los personajes de la famosa serie de Rick y Morty!.
                            En esta app se demuestra el consumo de una API y el scroll infinito.
                            </p>
                            <div className="text-center Detailproyect">
                                <i className="devicon-typescript-original colored"></i>
                                <i className="devicon-angularjs-plain colored"></i>
                            </div>
                            <br/>
                            <div className="text-center">
                                <a href="https://github.com/GedGonz/AppRickAndMorty" className="btn btn-light btn-lg"><i className="fa fa-github"></i></a>
                                <a href="https://gedgonz.github.io/AppRickAndMorty" className="btn btn-light btn-lg "><i className="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/> <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="images-left">
                            <img className="picture_proyect" src="https://repository-images.githubusercontent.com/55745086/2c4c7a00-bc4b-11ea-897e-18121dd77df5" alt="" />
                        </div>
                        <div className="contents-right">
                            <p className="title_proyect"><span>Blog</span>JS</p>
                            <p className="text-justify">
                            Esta aplicación hace la gestión y creación de post sobre el tema que tú prefieras, esta aplicación se desarrolló en Node.js, Express y Mongodb.
                            </p>
                            <div className="text-center Detailproyect">
                                <i className="devicon-javascript-plain colored"></i>
                                <i className="devicon-nodejs-plain colored"></i>
                                <i className="devicon-mongodb-plain colored"></i>
                            </div>
                            <br/>
                            <div className="text-center">
                                <a href="https://github.com/GedGonz/BLOGJS" className="btn btn-light btn-lg"><i className="fa fa-github"></i></a>
                                <a href="https://blogj.glitch.me" className="btn btn-light btn-lg "><i className="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/> <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="images-right">
                            <img className="picture_proyect" src="https://repository-images.githubusercontent.com/194757099/4846a600-89a9-11eb-9926-2c9bb154c386" alt="" />
                        </div>
                        <div className="contents-left">
                            <p className="title_proyect"><span>Github</span>API</p>
                            <p className="text-justify">
                            En esta aplicación hace uso de la API de GitHub en donde al buscar un usuario muestra sus datos principales y sus repositorios.
                            </p>
                            <div className="text-center Detailproyect">
                                <i className="devicon-typescript-original colored"></i>
                                <i className="devicon-angularjs-plain colored"></i>
                                <i className="devicon-github-plain colored"></i>
                            </div>
                            <br/>
                            <div className="text-center">
                                <a href="https://github.com/GedGonz/AngularAPIGitHub" className="btn btn-light btn-lg "><i className="fa fa-github"></i></a>
                                <a href="https://appfindrepository.herokuapp.com" className="btn btn-light btn-lg "><i className="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/> <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="images-left">
                            <img className="picture_proyect" src="https://repository-images.githubusercontent.com/402940655/bd0c910d-370d-42cc-a9a6-9d4a7929e043" alt="" />
                        </div>
                        <div className="contents-right">
                            <p className="title_proyect"><span>React</span> Movies </p>
                            <p className="text-justify">
                                Esta es una pequeña aplicación que la desarrolle como practica de estudio sobre ReactJS, esta muestra el top de películas, buscador y su detalle.
                            </p>
                            <div className="text-center Detailproyect">
                                <i className="devicon-react-original colored"></i>
                            </div>
                            <br/>
                            <div className="text-center">
                                <a href="https://github.com/GedGonz/reactMovie" className="btn btn-light btn-lg"><i className="fa fa-github"></i></a>
                                <a href="https://gedgonz.github.io/reactMovie/" className="btn btn-light btn-lg "><i className="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="message">
                <h3 className=" pt-lg-30 text-center"><TypewriterComponent classNameName="pt-lg-30 text-center typed"
                                options={{
                                    strings: ["Sigo trabajando en más proyectos!","Estarán en poco tiempo..","Ven y regresa para ver más!  😅"],
                                    autoStart: true,
                                    loop: true,
                                    typeSpeed: 65,
                                    backSpeed: 65
                                }}
                                />
                </h3>
            </div>                
        </section>
    )
}
