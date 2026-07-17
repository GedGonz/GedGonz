// URL raw del Gist con site.json (sin deploy al editar contenido).
// Ejemplo: https://gist.githubusercontent.com/USER/GIST_ID/raw/site.json
// Configura en .env: REACT_APP_CONTENT_URL=...
export const CONTENT_URL = (process.env.REACT_APP_CONTENT_URL || "").trim();
