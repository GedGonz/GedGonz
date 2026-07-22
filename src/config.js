// URL del Gist (raw o gist.github.com). El fetch usa la API de GitHub
// para evitar la caché CDN del raw (~5 min). Configura en .env:
// REACT_APP_CONTENT_URL=https://gist.githubusercontent.com/USER/GIST_ID/raw/site.json
export const CONTENT_URL = (process.env.REACT_APP_CONTENT_URL || "").trim();

export const GOATCOUNTER_CODE = (
    process.env.REACT_APP_GOATCOUNTER_CODE || ""
).trim();
