import React, { useState } from 'react'
import { Link } from 'react-scroll';
import "./Next.css";

const sections = ["inicio", "about", "proyects", "interests"];

export default function Next() {
    const [index, setIndex] = useState(0);
    const [goingDown, setGoingDown] = useState(true);

    const lastIndex = sections.length - 1;
    const target = goingDown
        ? Math.min(index + 1, lastIndex)
        : Math.max(index - 1, 0);
    const style = goingDown ? "fa fa-chevron-down buton" : "fa fa-chevron-up buton";

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
    )
}
