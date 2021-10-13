import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import "./Initial.css";
export default function Initial() {
    return (
        <header id="inicio" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-6">
                        <div className="presentation">
                            <h1 className="initial-pt-lg-20"> Gerald González Zeledón</h1>
                                
                            <p><TypewriterComponent classNameName="typed"
                                options={{
                                    strings: ["Soy desarrollador de software", "Soy innovador", "Soy autodidacta", "Soy amante de la tecnología"],
                                    autoStart: true,
                                    loop: true,
                                    typeSpeed: 65,
                                    backSpeed: 65
                                }}
                                />
                            </p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/gedgonz" target="_blank" className="linkedin"><i className="bx bxl-linkedin" title="Mi linkedin"></i></a>
                                <a href="https://www.github.com/gedgonz" target="_blank" className="github"><i className="bx bxl-github" title="Mi github"></i></a>
                                <a href="mailto:gedgonz7@gmail.com" target="_blank" className="google"><i className="bx bxl-google" title="Escribeme un mail"></i></a>
                                <a href="https://gedgonz.github.io/CV" target="_blank" className="google"><i className="bx bxs-file-html" title="Mas sobre mi!"></i></a>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <lottie-player className="pircure_anime1" src="https://assets10.lottiefiles.com/packages/lf20_n9ryrmts.json" mode="bounce" background="transparent" speed="1" loop autoplay></lottie-player>


                    </div>
                </div>
            </div>
            <footer>
                <div class="wave-container">
                    <svg id='canvas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,85.3C840,64,960,64,1080,64C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

                </div>
            </footer>
            </header>
    )
}
            {/* <header className="cabecera"  id="inicio">
                <div className="container">
                    <div className="row d-flex flex-column align-items-center">
                    <img src="https://scontent.fmga4-1.fna.fbcdn.net/v/t1.6435-9/244699535_10226854239689140_3431744798223675556_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JbtpzZQcJvMAX8ZwOVf&tn=ymrT42g4PqvU2DFb&_nc_ht=scontent.fmga4-1.fna&oh=83f9d3ddd1bf134912d229bdd5c2c9c8&oe=618C0581" alt="Foto perfil portafolio de Gerald Gonzalez" />
                    <h1>Gerald González</h1>
                    <h3>DESARROLLADOR DE SOFTWARE</h3>
                    <ul className="list-inline mt-4 rrss">
                        <li className="list-inline-item mx-2">
                        <a href="javascript:location='mailto:\u0064\u0069\u0065\u0067\u006f\u0070\u0065\u006e\u0066\u0065\u0072\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0"><i className="fas fa-2x fa-envelope mx-2"></i></a>
                        </li>
                        <li className="list-inline-item mx-2">
                        <a href="https://www.linkedin.com/in/gedgonz" target="_blank"><i className="fab fa-2x fa-linkedin-in mx-2"></i></a>
                        </li>
                        <li className="list-inline-item mx-2">
                        <a href="https://github.com/gedgonz" target="_blank"><i className="fab fa-2x fa-github mx-2"></i></a>
                        </li>
                    </ul>
                    </div>
                    
                </div>
            </header> */}