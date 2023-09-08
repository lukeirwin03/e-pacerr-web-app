"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoPic from "../../e-pacerr_logo_negative.png";

const Footer = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.matchMedia("(min-width: 1175px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  if(isLargeScreen){
    return (
      <div>
      <div className="waveSpacer peaks3"></div>
      <footer className="footer">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="row top">
          <div className="logoContainer">
              <Image className="logo" src={logoPic} alt="E-PACERR Logo"></Image>
          </div>

          <div className="columns">

            <div className="column left">
              <div className="desc">
                <b><u>E</u></b>nhancing{" "}<br />
                <b><u>P</u></b>rofessionalism,{" "}<br />
                <b><u>A</u></b>dvocacy, and{" "}<br />
                <b><u>C</u></b>apacity for{" "}<br />
                <b><u>E</u></b>xcellence in{" "}<br />
                <b><u>R</u></b>esposible Bioinformatics{" "}<br />
                <b><u>R</u></b>esearch
              </div>
            </div>
            <div className="column middle">
              <h3 className="columnHeader"><u>Navigation</u></h3>
              <ul>
                <li><a href="/" className="footerLink">Home</a></li>
                <li><a href="/enroll" className="footerLink">Enroll</a></li>
                <li><a href="/modules" className="footerLink">Modules</a></li>
                <li><a href="/faq" className="footerLink">FAQs</a></li>
              </ul>
            </div>

            <div className="column right">
              <h3 className="columnHeader"><u>Connect</u></h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/e.pacerrs/" target="_blank" className="footerLink">e.pacerrs</a> 
                  <div className="fa fa-instagram"></div>
                </li>
                <li>
                  <a href="mailto:epacerr@gmail.com" className="footerLink">epacerr@gmail.com</a>
                  <div className="fa fa-google"></div>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <div className="row bottom">
          Omaha, NE <br />
          ©2023 E-PACERR. All Rights Reserved
        </div>
      </footer>
      </div>
    );
  }

  if(!isLargeScreen){
    return (
      <div>
      <div className="waveSpacer peaks3"></div>
      <footer className="footer">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="row top">
          <div className="logoContainer">
              <Image className="logo" src={logoPic} alt="E-PACERR Logo"></Image>
          </div>

          <div className="row middleRow">
            <div className="desc">
              Enhancing{" "}
              Professionalism,{" "}
              Advocacy, and{" "}
              Capacity for{" "}
              Excellence in{" "}
              Resposible Bioinformatics{" "}
              Research
            </div>
          </div>
          
          <div className="columns">

            <div className="column middle">
              <h3 className="columnHeader"><u>Navigation</u></h3>
              <div className="links">
                <a href="/" className="footerLink">Home</a>
                <a href="enroll" className="footerLink">Enroll</a>
                <a href="/modules" className="footerLink">Modules</a>
                <a href="/team" className="footerLink">Team</a>
                <a href="/faq" className="footerLink">FAQs</a>
              </div>
            </div>

            <div className="column right">
              <h3 className="columnHeader"><u>Connect</u></h3>
              <div className="links">
                <div><a href="https://www.instagram.com/e.pacerrs/" target="_blank" className="footerLink">e.pacerrs</a><div className="fa fa-instagram"></div> </div>
                <div><a href="mailto:epacerr@gmail.com" className="footerLink">epacerr@gmail.com</a><div className="fa fa-google"></div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="row bottom">
          Omaha, NE <br />
          ©2023 E-PACERR. All Rights Reserved
        </div>
      </footer>
      </div>
    );
  }
  else{
    return <></>
  }
};

export default Footer;
