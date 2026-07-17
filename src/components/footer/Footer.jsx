import React from "react";
import { useSiteContent } from "../../context/SiteContentContext";
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();
    const { profile } = useSiteContent();
    const { contact, brand, footerTagline, name } = profile;

    return (
        <footer className="site-footer">
            <div className="footer-content reveal">
                <p className="footer-brand">
                    {brand.slice(0, 3)}
                    <span>{brand.slice(3)}</span>
                </p>
                <p className="footer-tagline">{footerTagline}</p>
                <div className="footer-social">
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <i className="fa fa-github"></i>
                    </a>
                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
                <p className="footer-copy">
                    © {year} {name}
                </p>
            </div>
        </footer>
    );
}
