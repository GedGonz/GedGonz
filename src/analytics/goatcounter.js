import { GOATCOUNTER_CODE } from "../config";

const SCRIPT_SRC = "https://gc.zgo.at/count.js";

function canTrack() {
    return Boolean(GOATCOUNTER_CODE) && process.env.NODE_ENV === "production";
}

function sendCount(payload) {
    if (!canTrack()) {
        return Promise.resolve(false);
    }

    return new Promise((resolve) => {
        let settled = false;

        const finish = (ok) => {
            if (settled) {
                return;
            }
            settled = true;
            resolve(ok);
        };

        const trySend = () => {
            if (typeof window.goatcounter?.count !== "function") {
                return false;
            }
            window.goatcounter.count(payload);
            return true;
        };

        if (trySend()) {
            finish(true);
            return;
        }

        const script = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
        if (!script) {
            finish(false);
            return;
        }

        const onReady = () => {
            finish(trySend());
        };

        script.addEventListener("load", onReady, { once: true });
        setTimeout(() => {
            script.removeEventListener("load", onReady);
            finish(trySend());
        }, 2000);
    });
}

export function initGoatCounter() {
    if (!canTrack()) {
        return;
    }

    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
        return;
    }

    window.goatcounter = {
        ...(window.goatcounter || {}),
        no_onload: true,
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = SCRIPT_SRC;
    script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
    document.body.appendChild(script);
}

export function trackPageview(path) {
    return sendCount({
        path:
            path ||
            `${window.location.pathname}${window.location.search}${window.location.hash}`,
    });
}

export function trackEvent(name, title) {
    if (!name) {
        return Promise.resolve(false);
    }

    const path = name.startsWith("/") ? name : `/${name}`;

    return sendCount({
        path,
        title: title || name,
        no_session: true,
    });
}
