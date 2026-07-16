import React, { useLayoutEffect, useRef, useState } from 'react'
import TypewriterComponent from 'typewriter-effect';
import projects from '../../data/projects';
import "./Proyects.css";

function ProjectCard({ project }) {
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const descriptionRef = useRef(null);

    useLayoutEffect(() => {
        const el = descriptionRef.current;
        if (!el) return;

        const measure = () => {
            const overflow = el.scrollHeight > el.clientHeight + 1;
            setIsOverflowing((prev) => (prev !== overflow ? overflow : prev));
        };

        if (!expanded) {
            measure();
        }

        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [expanded, project.description]);

    return (
        <article className="project-card reveal">
            <div className="project-image">
                <img
                    className="picture_proyect"
                    src={project.image}
                    alt={project.titleAccent + project.titleRest}
                    loading="lazy"
                />
            </div>
            <div className="project-body">
                <p className="title_proyect">
                    <span>{project.titleAccent}</span>{project.titleRest}
                </p>
                <p
                    ref={descriptionRef}
                    className={`project-description${expanded ? '' : ' clamped'}`}
                >
                    {project.description}
                </p>
                {(isOverflowing || expanded) && (
                    <button
                        type="button"
                        className="read-more-btn"
                        onClick={() => setExpanded((prev) => !prev)}
                        aria-expanded={expanded}
                    >
                        {expanded ? 'Mostrar menos' : 'Seguir leyendo'}
                    </button>
                )}
                <div className="project-tech">
                    {project.tech.map((icon, i) => (
                        <i className={icon} key={i}></i>
                    ))}
                </div>
                <div className="project-links">
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="project-btn"
                            aria-label="Ver repositorio en GitHub"
                        >
                            <i className="fa fa-github"></i>
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="project-btn"
                            aria-label="Ver demo del proyecto"
                        >
                            <i className="fa fa-eye"></i>
                        </a>
                    )}
                    {project.note && (
                        <span className="project-note">
                            <i className="fa fa-lock"></i>
                            {project.note}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Proyects() {
    return (
        <section id="proyects">
            <div className="container">
                <div className="about text-center reveal">
                    <h3>Estos son algunos de mis proyectos</h3>
                    <span className="section-underline"></span>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>

            <div className="message">
                <h3 className="pt-lg-30 text-center">
                    <TypewriterComponent
                        options={{
                            strings: ["Sigo trabajando en más proyectos!", "Estarán en poco tiempo..", "Ven y regresa para ver más!  😅"],
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
