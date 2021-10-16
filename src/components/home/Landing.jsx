import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import ButonLink from '../button-link/ButonLink';
import Next from '../FloatButton/Next';
import "./Landing.css";
export default function Landing() {
    return (
        <header id="inicio" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-6">
                        <div className="presentation">
                            <h1 className="initial-pt-lg-20"> Gerald González Zeledón</h1>
                                
                            <TypewriterComponent className="typed"
                                options={{
                                    strings: ["Soy desarrollador de software", "Soy innovador", "Soy autodidacta", "Soy amante de la tecnología"],
                                    autoStart: true,
                                    loop: true,
                                    typeSpeed: 65,
                                    backSpeed: 65
                                }}
                                />
                            <div className="social-links">
                                <ButonLink link="https://www.linkedin.com/in/gedgonz" classtype="linkedin" title="Mi linkedin" />
                                <ButonLink link="https://www.github.com/gedgonz" classtype="github" title="Mi github" />
                                <ButonLink link="mailto:gedgonz7@gmail.com" classtype="mail" title="Escribeme un mail" />
                                <ButonLink link="https://gedgonz.github.io/CV" classtype="show" title="Mas sobre mi!" /> 
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <lottie-player className="pircure_anime1" src="https://assets10.lottiefiles.com/packages/lf20_n9ryrmts.json" mode="bounce" background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>
                </div>
            </div>

            <div className="wave-container">
                    <svg id='canvas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,85.3C840,64,960,64,1080,64C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            </div>

            <Next/>
            </header>
    )
}