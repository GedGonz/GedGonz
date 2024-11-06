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
                        <div className="images-left">
                            <img className="picture_proyect" src="https://repository-images.githubusercontent.com/417920458/9158b0b4-2b99-4a45-b7a4-0a66804486fc" alt="" />
                        </div>
                        <div className="contents-right">
                            <p className="title_proyect"><span>Port</span>Folio</p>
                            <p className="text-justify">
                            Esta es una pequeña aplicación web statica donde muestro algunos de mis proyectos, curiosamente es la página donde te ecuentras, este fue creado con react 17
                            </p>
                            <div className="text-center Detailproyect">
                            <i className="devicon-react-original colored"></i>
                            
                            </div>
                            <br/>
                            <div className="text-center">
                                <a href="https://github.com/GedGonz/GedGonz" className="btn btn-light btn-lg "><i className="fa fa-github"></i></a>
                                <a href="https://gedgonz.github.io/GedGonz" className="btn btn-light btn-lg "><i className="fa fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
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
                                <a href="https://gedgonz.github.io/AngularAPIGitHub" className="btn btn-light btn-lg "><i className="fa fa-eye"></i></a>
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
                <br/> <br/> <br/> <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="images-right image-custom">
                            <img className="picture_proyect" src="https://repository-images.githubusercontent.com/883284499/12e5eba2-3904-46c7-a4c6-07e43a777292" alt="" />
                        </div>
                        <div className="contents-left">
                            <p className="title_proyect"><span>notify</span>jenkins</p>
                            <p className="text-justify">
                                Esto en si no es un proyecto como los demas, es un pequeño script en bash para mostrar las notificaiones en linux, muestra notificaciones al finalizar la ejecución de jobs en jenkis, mostrando el nombre del jobs, y el estado, en caso 
                                que el job haya fallado muestra la url para llevar directamente al la ejecución del job.
                            </p>
                            <div className="text-center Detailproyect icon-costumer">
                            <svg viewBox="0 0 128 128">
                                <path fill="none" d="M-143.76 4.24h119.53v119.53h-119.53z"></path><path fill="#293138" d="M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2 2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96zM79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6.06-.06.12-.1.18-.13.11-.06.22-.07.31-.03 1.14.38 2.59.2 3.99-.5 1.78-.9 2.97-2.72 2.95-4.52-.02-1.64-.9-2.31-3.05-2.33-2.74.01-5.3-.53-5.34-4.57-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.77.77 0 01-.19.14c-.1.05-.19.06-.28.05-.49-.11-1.65-.36-3.48.56-1.92.97-2.59 2.64-2.58 3.88.02 1.48.77 1.93 3.39 1.97 3.49.06 4.99 1.58 5.03 5.09.05 3.44-1.79 7.15-4.61 9.41zm19.78-5.41c0 .3-.04.58-.29.72l-9.54 5.8c-.25.15-.45.02-.45-.28v-2.46c0-.3.18-.46.43-.61l9.4-5.62c.25-.15.45-.02.45.28v2.17zm6.56-55.09l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9-.65.11-1.32.19-1.98.19-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63-1.27-2.67-4.09-3.39-7.38-1.47z"></path>
                            </svg> 
                            </div>
                            <br/>
                            <div className="text-center">
                                <a href="https://github.com/GedGonz/AngularAPIGitHub" className="btn btn-light btn-lg "><i className="fa fa-github"></i></a>
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
