"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import icon from "../../assets/e-pacerr/e-pacerr_icon.png";
import Sidenav from "./Sidenav"

const Header = () => {
  const [isLargerScreen, setIsLargeScreen] = useState(true);
  
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
          <a href="/team" className="nav-link">Team</a>
          <a href="/faq" className="nav-link">FAQs</a>
          <a href="/enroll"><button className="click"><span className="button-text">Enroll Now!</span></button></a>
        </div>
      </header>
    )
  }

  else if(!isLargerScreen){
    return(
      <header className="header">
        <div className="logo-container">
          <a href="/"><Image src={icon} alt="icon" className="icon"></Image></a>
        </div>
        <div className="spacer"></div>
        <div className="sidenav-container"><Sidenav/></div>
      </header>
    )
  }

  
  else { return <div>There has been an issue</div> }
  
  
}
export default Header;