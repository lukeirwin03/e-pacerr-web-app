import React from "react";
import Image from "next/image";
import logoPic from "../../e-pacerr_logo_negative-transformed.png";

function AnimatedHeader(){
  const generateCircles = (count: number) => {
    const circles = [];

    for (let i = 1; i <= count; i++) {
      const delay = i % 5 === 0 ? 0 : i;
      const duration = i % 4 === 0 ? 18 : 25;

      circles.push(
        <li
          key={i}
          style={{
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        ></li>
      );
    }

    return circles;
  };

    return (
      <div>
      <div className="context">
        <h1>        
          <div className="heading">
            <Image className='logo' src={logoPic} alt='E-PACERR Logo'></Image>
            <b><u>E</u></b>nhancing{" "}
            <b><u>P</u></b>rofessionalism,{" "}
            <b><u>A</u></b>dvocacy, and{" "}
            <b><u>C</u></b>apacity for{" "}
            <b><u>E</u></b>xcellence in{" "}
            <b><u>R</u></b>esposible Bioinformatics{" "}
            <b><u>R</u></b>esearch
          </div>
        </h1>
      </div>
      <div className="area">
        <ul className="circles">{generateCircles(10)}</ul>
      </div>
    </div>
    );
  };
  
  export default AnimatedHeader;