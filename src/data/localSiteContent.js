import profile from "./profile";
import experience from "./experience";
import { education, otherEducation } from "./education";

export function buildSiteContent() {
    return {
        version: 1,
        profile,
        experience,
        education,
        otherEducation,
    };
}

export function buildCv(content) {
    const { profile: p, experience: exp, education: edu, otherEducation: other } =
        content;
    return {
        name: p.name,
        title: p.title,
        summary: p.summaries.cv,
        contact: p.contact,
        experience: exp,
        education: edu,
        otherEducation: other,
        skills: p.skills,
        pdfFilename: p.pdfFilename,
    };
}

export function resolveAssetSrc(src) {
    if (!src) return src;
    if (/^https?:\/\//i.test(src)) return src;
    const base = process.env.PUBLIC_URL || "";
    return `${base}${src.startsWith("/") ? src : `/${src}`}`;
}

const localSiteContent = buildSiteContent();

export default localSiteContent;
