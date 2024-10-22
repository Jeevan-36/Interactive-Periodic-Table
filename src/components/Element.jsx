import React, { useState } from "react";
import styles from "./Element.module.css";
function Element({ element,handleButtonClick }) {
  const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "polyatomic nonmetal":"#C5E478",
    "alkali metal": "#8F2D56",
    "transition metal": "#27408B",
    "post-transition metal": "#218380",
    "lanthanide": "#4AABAF",
    "actinide":"#39FF14",
    "metalloid": "#73D2DE",
    "unknown":"#5E3A87",
    "group-name":"#58586B"
  };

  const [hover,setHover]=useState(false);
  return (
  
      <button className={`${styles.ElementInfo} ${styles[element.id]}`} style={{gridColumn:`${element.xpos}` , gridRow:`${element.ypos}`,
      border:`2px solid ${colorMap[element.category]}
      `,
      boxShadow: hover &&`0px 0px 8px 5px ${colorMap[element.category]}`
      }}  onClick={()=>handleButtonClick(element,colorMap[element.category])}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      >
        <span>{element.number}</span>
        <span>
          <b className="fs-6">{element.symbol}</b>
        </span>
        <span>{element.name}</span>
        <span>{element.atomic_mass}</span>
      </button>
  );
}

export default Element;
