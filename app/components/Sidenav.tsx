"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsOpen(true);
    }
  }, []);

  const toggleSidenav = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <button
        onClick={toggleSidenav}
        className={`toggle-closed ${isOpen ? "toggle-open" : ""}`}>
        <div className="toggle-sidenav__icon"></div>
      </button>

      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <div className="link">
          <a href="/">Home</a>
        </div>
        <div className="link">
          <a href="/modules">Modules</a>
        </div>
        <div className="link">
          <a href="/faq">FAQs</a>
        </div>
        <div className="link">
          <a href="/enroll">Enroll</a>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidenav} />}
    </div>
  );
};

export default Sidenav;
