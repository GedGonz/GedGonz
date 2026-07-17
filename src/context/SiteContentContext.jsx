import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { CONTENT_URL } from "../config";
import localSiteContent, {
    buildCv,
    resolveAssetSrc,
} from "../data/localSiteContent";

const SiteContentContext = createContext(null);

function normalizeContent(raw) {
    if (!raw || !raw.profile) return localSiteContent;
    return {
        version: raw.version || 1,
        profile: raw.profile,
        experience: Array.isArray(raw.experience) ? raw.experience : [],
        education: Array.isArray(raw.education) ? raw.education : [],
        otherEducation: Array.isArray(raw.otherEducation)
            ? raw.otherEducation
            : [],
    };
}

export function SiteContentProvider({ children }) {
    const [content, setContent] = useState(localSiteContent);
    const [source, setSource] = useState("local");
    const [ready, setReady] = useState(!CONTENT_URL);

    useEffect(() => {
        if (!CONTENT_URL) {
            setContent(localSiteContent);
            setSource("local");
            setReady(true);
            return undefined;
        }

        let cancelled = false;
        const controller = new AbortController();

        (async () => {
            try {
                const url = CONTENT_URL.includes("?")
                    ? `${CONTENT_URL}&_=${Date.now()}`
                    : `${CONTENT_URL}?_=${Date.now()}`;
                const response = await fetch(url, {
                    signal: controller.signal,
                    cache: "no-store",
                });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const json = await response.json();
                if (cancelled) return;
                setContent(normalizeContent(json));
                setSource("remote");
            } catch (error) {
                if (cancelled || error.name === "AbortError") return;
                console.warn("[SiteContent] Gist fetch failed, using local:", error);
                setContent(localSiteContent);
                setSource("local");
            } finally {
                if (!cancelled) setReady(true);
            }
        })();

        return () => {
            cancelled = true;
            controller.abort();
        };
    }, []);

    const value = useMemo(() => {
        const cv = buildCv(content);
        return {
            ready,
            source,
            profile: content.profile,
            experience: content.experience,
            education: content.education,
            otherEducation: content.otherEducation,
            cv,
            resolveAssetSrc,
        };
    }, [content, ready, source]);

    return (
        <SiteContentContext.Provider value={value}>
            {children}
        </SiteContentContext.Provider>
    );
}

export function useSiteContent() {
    const ctx = useContext(SiteContentContext);
    if (!ctx) {
        throw new Error("useSiteContent must be used within SiteContentProvider");
    }
    return ctx;
}
