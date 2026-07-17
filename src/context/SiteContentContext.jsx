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

function resolveGistId(contentUrl) {
    const patterns = [
        /api\.github\.com\/gists\/([a-f0-9]+)/i,
        /gist\.githubusercontent\.com\/[^/]+\/([a-f0-9]+)/i,
        /gist\.github\.com\/[^/]+\/([a-f0-9]+)/i,
    ];
    for (const pattern of patterns) {
        const match = contentUrl.match(pattern);
        if (match) return match[1];
    }
    return null;
}

async function fetchRemoteContent(contentUrl, signal) {
    const gistId = resolveGistId(contentUrl);

    // API evita el CDN raw (max-age 300). ?_= fuerza miss de caché en cada reload.
    if (gistId) {
        const apiUrl = `https://api.github.com/gists/${gistId}?_=${Date.now()}`;
        const response = await fetch(apiUrl, {
            signal,
            cache: "no-store",
            headers: { Accept: "application/vnd.github+json" },
        });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const gist = await response.json();
        const file =
            gist.files?.["site.json"] ||
            Object.values(gist.files || {}).find((f) =>
                f.filename?.endsWith(".json")
            );
        if (!file) {
            throw new Error("No site.json in gist");
        }
        if (file.truncated && file.raw_url) {
            const rawRes = await fetch(
                `${file.raw_url}${file.raw_url.includes("?") ? "&" : "?"}_=${Date.now()}`,
                { signal, cache: "no-store" }
            );
            if (!rawRes.ok) {
                throw new Error(`HTTP ${rawRes.status}`);
            }
            return rawRes.json();
        }
        return JSON.parse(file.content);
    }

    const url = contentUrl.includes("?")
        ? `${contentUrl}&_=${Date.now()}`
        : `${contentUrl}?_=${Date.now()}`;
    const response = await fetch(url, { signal, cache: "no-store" });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
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
                const json = await fetchRemoteContent(
                    CONTENT_URL,
                    controller.signal
                );
                if (cancelled) return;
                setContent(normalizeContent(json));
                setSource("remote");
            } catch (error) {
                if (cancelled || error.name === "AbortError") return;
                console.warn(
                    "[SiteContent] Gist fetch failed, using local:",
                    error
                );
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
