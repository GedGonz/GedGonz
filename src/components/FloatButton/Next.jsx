import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import "./Next.css";
export default function Next() {

    let [isdown, setisdown] = useState(true);
    let [sectionNext, setsectionNext] = useState("inicio");
    let [index, setindex] = useState(0);
    let [style, setstyle] = useState("fa fa-chevron-down buton");
    
    useEffect(()=>{
        handleSetActive()
    },[]);

    function handleSetActive() {
        const section =["inicio","about","proyects"];
        
         setisdown(index==0);

        if(isdown)
        {
            setstyle("fa fa-chevron-down buton");
            setindex(++index);
        }
        else
        {
            if(index==0)
            {
                setindex(++index);
                setstyle("fa fa-chevron-down buton");
            }
            else{
                setstyle("fa fa-chevron-up buton");
                setindex(--index);
            }   
        }
        setsectionNext(section[index]);
      }
    return (
        <div>
            <Link className="float" to={sectionNext} spy={true} smooth={true} duration={900} onClick={handleSetActive}>
                <i className={style}/>
            </Link> 

        </div>
    )
}
