import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGoatCounter, trackPageview } from "../../analytics/goatcounter";

function GoatCounterTracker() {
    const location = useLocation();

    useEffect(() => {
        initGoatCounter();
    }, []);

    useEffect(() => {
        trackPageview(`${location.pathname}${location.search}`);
    }, [location.pathname, location.search]);

    return null;
}

export default GoatCounterTracker;
