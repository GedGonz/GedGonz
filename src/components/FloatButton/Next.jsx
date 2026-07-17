import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Next.css";

const sections = ["inicio", "about", "proyects", "interests"];

function getActiveIndex() {
    const offset = window.innerHeight * 0.35;
    let active = 0;

    for (let i = 0; i < sections.length; i += 1) {
        const el = document.getElementById(sections[i]);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
            active = i;
        }
    }

    return active;
}

export default function Next() {
    const [index, setIndex] = useState(0);
    const [goingDown, setGoingDown] = useState(true);

    const lastIndex = sections.length - 1;
    const target = goingDown
        ? Math.min(index + 1, lastIndex)
        : Math.max(index - 1, 0);
    const style = goingDown ? "fa fa-chevron-down buton" : "fa fa-chevron-up buton";

    useEffect(() => {
        let ticking = false;

        const syncFromScroll = () => {
            const active = getActiveIndex();
            setIndex(active);
            setGoingDown((prev) => {
                if (active >= lastIndex) return false;
                if (active <= 0) return true;
                return prev;
            });
            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(syncFromScroll);
        };

        syncFromScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastIndex]);

    function handleClick() {
        let nextDown = goingDown;
        if (goingDown && target >= lastIndex) nextDown = false;
        else if (!goingDown && target <= 0) nextDown = true;

        setIndex(target);
        setGoingDown(nextDown);
    }

    return (
        <div>
            <Link
                className="float"
                to={sections[target]}
                spy={true}
                smooth={true}
                duration={900}
                onClick={handleClick}
            >
                <i className={style} />
            </Link>
        </div>
    );
}
