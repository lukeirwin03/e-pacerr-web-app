import React from "react";
import Image from "next/image";
import stock1 from "../../stockImage1.png";
import stock2 from "../../stockImage2.png";
import stock3 from "../../stockImage3.png";
import stock4 from "../../stockImage4.png";


const SlideShow = () => {
  return (
    <div className="image-stack">
      <a href="/modules"><Image className="stack-image" src={stock1} alt="stock photo" /></a>
      <a href="/modules"><Image className="stack-image" src={stock2} alt="stock photo" /></a>
      <a href="/modules"><Image className="stack-image" src={stock3} alt="stock photo" /></a>
      <a href="/modules"><Image className="stack-image" src={stock4} alt="stock photo" /></a>
    </div>
  )
}

export default SlideShow;

