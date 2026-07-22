import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import { trackEvent } from "../../analytics/goatcounter";
import { useSiteContent } from "../../context/SiteContentContext";
import "./CvPage.css";

const CV_KEYWORDS = [
    "Java/Spring Boot",
    "Oracle/PostgreSQL",
    "arquitectura limpia",
    "Spring Boot",
    ".NET Core",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Azure AD",
    "GeoServer",
    "Web APIs",
    "full-stack",
    "backend",
    "Angular",
    "Docker",
    "Oracle",
    ".NET",
    "Kafka",
    "Redis",
    "AWS",
    "DDD",
    "JWT",
    "APIs",
    "Java",
    "C#",
];

function emphasizeKeywords(text) {
    if (!text) return text;
    const pattern = new RegExp(
        `(${CV_KEYWORDS.map((k) =>
            k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        ).join("|")})`,
        "gi"
    );
    const parts = text.split(pattern);
    return parts.map((part, index) =>
        CV_KEYWORDS.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
            <strong key={`${part}-${index}`} className="cv-kw">
                {part}
            </strong>
        ) : (
            part
        )
    );
}

export default function CvPage() {
    const { cv } = useSiteContent();
    const [downloading, setDownloading] = useState(false);

    const handlePrint = useCallback(() => {
        trackEvent("cv-print", "Imprimir CV").finally(() => {
            setTimeout(() => window.print(), 250);
        });
    }, []);

    const handleDownloadPdf = useCallback(async () => {
        const element = document.getElementById("cv-document");
        if (!element || downloading) return;

        setDownloading(true);
        element.classList.add("cv-sheet--pdf");
        try {
            await html2pdf()
                .set({
                    margin: [4, 6, 4, 6],
                    filename: cv.pdfFilename,
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        logging: false,
                        backgroundColor: "#ffffff",
                    },
                    jsPDF: {
                        unit: "mm",
                        format: "a4",
                        orientation: "portrait",
                    },
                    pagebreak: { mode: ["avoid-all"] },
                })
                .from(element)
                .save();
            await trackEvent("cv-download", "Descargar CV PDF");
        } finally {
            element.classList.remove("cv-sheet--pdf");
            setDownloading(false);
        }
    }, [cv.pdfFilename, downloading]);

    return (
        <div className="cv-page">
            <div className="cv-toolbar no-print">
                <Link to="/" className="cv-toolbar-back">
                    ← Volver al portafolio
                </Link>
                <div className="cv-toolbar-actions">
                    <button
                        type="button"
                        className="cv-btn cv-btn-secondary"
                        onClick={handlePrint}
                    >
                        Imprimir
                    </button>
                    <button
                        type="button"
                        className="cv-btn cv-btn-primary"
                        onClick={handleDownloadPdf}
                        disabled={downloading}
                    >
                        {downloading ? "Generando PDF…" : "Descargar PDF"}
                    </button>
                </div>
            </div>

            <p className="cv-print-hint no-print">
                <strong>Descargar PDF</strong> guarda el archivo al instante.
                <strong> Imprimir</strong> abre el diálogo del navegador.
            </p>

            <article className="cv-sheet" id="cv-document">
                <header className="cv-header">
                    <h1 className="cv-name">{cv.name}</h1>
                    <p className="cv-title">{cv.title}</p>
                    <p className="cv-contact-line">
                        <a href={`mailto:${cv.contact.email}`}>
                            {cv.contact.email}
                        </a>
                        <span className="cv-sep">·</span>
                        <a href={`tel:${cv.contact.phone.replace(/\s/g, "")}`}>
                            {cv.contact.phone}
                        </a>
                        <span className="cv-sep">·</span>
                        <span>{cv.contact.location}</span>
                    </p>
                    <p className="cv-contact-line">
                        <a
                            href={cv.contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {cv.contact.linkedinLabel}
                        </a>
                        <span className="cv-sep">·</span>
                        <a
                            href={cv.contact.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {cv.contact.githubLabel}
                        </a>
                        <span className="cv-sep">·</span>
                        <a
                            href={cv.contact.portfolio}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {cv.contact.portfolioLabel}
                        </a>
                    </p>
                </header>

                <section className="cv-section">
                    <h2 className="cv-section-title">Perfil</h2>
                    <p className="cv-summary">
                        {emphasizeKeywords(cv.summary)}
                    </p>
                </section>

                <section className="cv-section">
                    <h2 className="cv-section-title">Experiencia</h2>
                    {cv.experience.map((job, jobIndex) => (
                        <div
                            className={
                                jobIndex === 0
                                    ? "cv-job cv-job--current"
                                    : "cv-job"
                            }
                            key={job.id}
                        >
                            <div className="cv-job-header">
                                <h3 className="cv-job-role">
                                    {job.role}
                                    <span className="cv-job-company">
                                        {" "}
                                        — {job.company}
                                    </span>
                                </h3>
                                <p className="cv-job-meta">
                                    {job.period}
                                    {job.location ? ` · ${job.location}` : ""}
                                </p>
                            </div>
                            <ul className="cv-bullets">
                                {job.bullets.map((bullet, index) => (
                                    <li
                                        key={`${job.id}-${index}`}
                                        className={
                                            jobIndex === 0 && index < 3
                                                ? "cv-bullet--key"
                                                : undefined
                                        }
                                    >
                                        {emphasizeKeywords(bullet)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section className="cv-section">
                    <h2 className="cv-section-title">Educación</h2>
                    {cv.education.map((item) => (
                        <div className="cv-edu" key={item.id}>
                            <h3 className="cv-edu-degree">{item.degree}</h3>
                            <p className="cv-edu-meta">
                                {item.school} · {item.period}
                            </p>
                        </div>
                    ))}
                </section>

                <section className="cv-section">
                    <h2 className="cv-section-title">Formación adicional</h2>
                    {cv.otherEducation.map((item) => (
                        <div className="cv-edu" key={item.id}>
                            <h3 className="cv-edu-degree">{item.title}</h3>
                            <p className="cv-edu-meta">
                                {item.school} · {item.period}
                            </p>
                        </div>
                    ))}
                </section>

                <section className="cv-section">
                    <h2 className="cv-section-title">Habilidades</h2>
                    <p className="cv-skills-line">
                        <strong>Lenguajes:</strong>{" "}
                        {cv.skills.languages.join(" · ")}
                    </p>
                    <p className="cv-skills-line">
                        <strong>Backend:</strong> {cv.skills.backend.join(" · ")}
                    </p>
                    <p className="cv-skills-line">
                        <strong>Frontend:</strong>{" "}
                        {cv.skills.frontend.join(" · ")}
                    </p>
                    <p className="cv-skills-line">
                        <strong>Datos:</strong> {cv.skills.data.join(" · ")}
                    </p>
                    <p className="cv-skills-line">
                        <strong>Herramientas:</strong>{" "}
                        {cv.skills.tools.join(" · ")}
                    </p>
                    <p className="cv-skills-line">
                        <strong>Prácticas:</strong>{" "}
                        {cv.skills.practices.join(" · ")}
                    </p>
                </section>
            </article>
        </div>
    );
}
