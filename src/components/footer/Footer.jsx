import React from 'react'
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="footer-content reveal">
                <p className="footer-brand">Ged<span>Gonz</span></p>
                <p className="footer-tagline">Desarrollador de software</p>
                <div className="footer-social">
                    <a
                        href="https://www.github.com/gedgonz"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <i className="fa fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gedgonz"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                <p className="footer-copy">© {year} Gerald González Zeledón</p>
            </div>
        </footer>
    )
}
