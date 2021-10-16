import React from 'react'

export default function ButonLink(props) {

   function selectType(classtype){
        if(classtype=="mail")
            return "bx bx-mail-send";
        if(classtype=="file")
            return "bx bxs-file-html";
        if(classtype=="show")
            return "bx bxs-show";
        
        return "bx bxl-"+classtype;

    }
    return (
        <a href={props.link}  className={props.classtype}>
              <i className={selectType(props.classtype)} title={props.title}></i>          
        </a>
    )
}
