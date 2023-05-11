'use client';
import React, { useState } from "react";
import Sidenav from "./Sidenav";

function Header(){
  return (
    <header className="header">
      <Sidenav />
      <div className="headerContainer">
        <div className="logo">
          <a href="/"><h3>Enroll in the Pilot Study</h3></a>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
