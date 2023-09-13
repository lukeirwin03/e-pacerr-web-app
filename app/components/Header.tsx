"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import icon from "../../e-pacerr_icon.png";
import Sidenav from "./Sidenav"

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo-container">
//         <a href="/"><Image src={icon} alt="icon" className="icon"></Image></a>
//       </div>
//       <div className="link-container">
//         <a href="/" className="nav-link">Home</a>
//         <a href="/modules" className="nav-link">Modules</a>
//         <a href="/faq" className="nav-link">FAQs</a>
//         <button className="click"><a href="/enroll" className="button-text">Enroll Now!</a></button>
//       </div>
//       <div className="spacer"></div>
//       <Sidenav />
//     </header>

//   );
// }

// export default Header;


const Header = () => {
  const [isLargerScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 840px)").matches);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  if(isLargerScreen){
    return (
      <header className="header">
        <div className="logo-container">
          <a href="/"><Image src={icon} alt="icon" className="icon"></Image></a>
        </div>
        <div className="link-container">
          <a href="/" className="nav-link">Home</a>
          <a href="/modules" className="nav-link">Modules</a>
          <a href="/faq" className="nav-link">FAQs</a>
          <button className="click"><a href="/enroll" className="button-text">Enroll Now!</a></button>
        </div>
      </header>
    )
  }

  if(!isLargerScreen){
    return(
      <header className="header">
        <div className="logo-container">
          <a href="/"><Image src={icon} alt="icon" className="icon"></Image></a>
        </div>
        <div className="spacer"></div>
        <div className="sidenav-container"><Sidenav /></div>
      </header>
    )
  }
}
export default Header;