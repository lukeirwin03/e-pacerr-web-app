import Image from "next/image";
import icon from "../../e-pacerr_icon.png";

function Header() {
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

  );
}

export default Header;
