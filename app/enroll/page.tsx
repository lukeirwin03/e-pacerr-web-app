import React from "react";
import Image from "next/image";
import stock1 from "../../stockImage1.png";

export const metadata = {
  title: "Enroll in the Pilot Study",
};

const EnrollPage = () => {
  return (
    <div className="content">
      <div className="buffer"></div>
      <div className="container">
        <div className="info">
          <h2 className="sectionHeader">
            Here's how to enroll in a pilot study for one or more of our
            available courses!
          </h2>
          <br></br>
          <div className="section">
            <h6 className="subheading">
              Are you a bioinformatics trainee? Looking to learn more?
            </h6>
            <div className="text">
              Our modules will teach trainees about the bioinformatics community
              and how to engage with it. The content will be presented in
              various formats, including videos, quizzes, coding exercises, and
              open-access reading material. The project will consist of at least
              12 major modules, and all assessments will be auto-graded. The
              project will complement ongoing training in bioinformatics
              education at any point in one's career, and the self-paced modules
              will enable users to compare their results and effectively join
              local, regional, and international science communities.
            </div>
            <Image className="fullImage" src={stock1} alt="Stock Photo"></Image>
            <div className="imageCaption">A caption for the photo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollPage;
