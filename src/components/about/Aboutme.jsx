import React from "react";
import { useSiteContent } from "../../context/SiteContentContext";
import "./Aboutme.css";

export default function Aboutme() {
    const { profile, resolveAssetSrc } = useSiteContent();
    const { techIcons, aiTools, summaries, shortName } = profile;

    return (
        <section id="about" className="portfolio-section">
            <div className="container contains-aboutme">
                <div className="row reveal">
                    <div className="col-md-3">
                        <div className="container_image">
                            <div className="backgroundimg">
                                <img
                                    className="picture"
                                    src={
                                        process.env.PUBLIC_URL + "/images/me.jpg"
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="about">
                            <h3>
                                👋 Hola, soy <span>{shortName}</span>{" "}
                            </h3>
                            {summaries.about.map((paragraph) => (
                                <p
                                    key={paragraph.slice(0, 32)}
                                    className="text-justify"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row informationme reveal">
                    <div className="col-md-12">
                        <div>
                            <p className="title_info_one">
                                Conocimientos en tecnologías{" "}
                            </p>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-lg-3 text-center">
                                <p className="title_info">Lenguajes</p>
                                {techIcons.languages.map((icon) => (
                                    <i key={icon} className={icon}></i>
                                ))}
                            </div>

                            <div className="col-lg-3 text-center">
                                <p className="title_info">Front-End</p>
                                {techIcons.frontend.map((icon) => (
                                    <i key={icon} className={icon}></i>
                                ))}
                            </div>

                            <div className="col-lg-3 text-center">
                                <p className="title_info">Back-End</p>
                                {techIcons.backend.map((icon) => (
                                    <i key={icon} className={icon}></i>
                                ))}
                                {techIcons.backendExtraSvg.map((item) => (
                                    <img
                                        key={item.alt}
                                        className="tech-svg"
                                        src={resolveAssetSrc(item.src)}
                                        alt={item.alt}
                                    />
                                ))}
                            </div>
                            <div className="col-lg-3 text-center">
                                <p className="title_info">Tools</p>
                                {techIcons.tools.map((icon) => (
                                    <i key={icon} className={icon}></i>
                                ))}
                            </div>
                        </div>

                        <div className="ai-tools">
                            <p className="title_info">IA & Productividad</p>
                            <div className="ai-chips">
                                {aiTools.map((tool) => (
                                    <span key={tool} className="ai-chip">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wave-container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#0099ff"
                        fillOpacity="1"
                        d="M0,192L1440,0L1440,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
