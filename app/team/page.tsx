import React from "react";
import Image from "next/image";
import stock1 from "../../stockImage1.png";
import missingPhoto from "../../missing-photo.png";

export const metadata = {
  title: "Meet the Team",
};

const TeamPage = () => {
  return (
    <div className="content">
      <div className="container">
        <h2 className="sectionHeader">
          The educational goals of our project include the following three
          items, centered around providing effective content that is available –
          and actually educational - for all.
        </h2>
        <div className="text">
          <ul>
            <li>
              1. Education Goal 1: Develop a self-paced, free, online curriculum
              that is usable and adopts the tenets of universal design. We will
              develop 12 modules of content that achieve a System Usability
              Score (SUS) of 80 or higher indicating a usable system. This will
              be done in Y1-Y3.
            </li>
            <li>
              2. Education Goal 2: Provide a curriculum that is effective in
              educating users on responsible, rigorous, and reproducible
              bioinformatics research. The 12 modules of content will be formed
              around current literature in responsible research, bioinformatics
              best practices, ethics, professionalism, and institutional
              knowledge – all of which are taught inconsistently or not at all
              in traditional bioinformatics education programs. This will be
              done in Y1-Y2.
            </li>
            <li>
              3. Education Goal 3: Provide built-in measures of mastery of
              content for each individual module so trainees can confidently
              evaluate their grasp of the material. We use both formative and
              summative assessments to measure mastery of learning for students
              in an automatic way. All modules will be piloted by the end of
              summer in Y3.
            </li>
          </ul>
        </div>
        <br></br>

        <div className="section">
          <h6 className="subheading">Leadership</h6>
          <div className="text">
            Who leads the team? Describe your founder or team members who play a
            leadership role on the team.
          </div>
          <Image className="fullImage" src={stock1} alt="Stock Photo"></Image>
          <div className="imageCaption">A caption for the photo</div>
        </div>

        <div className="section">
          <h6 className="subheading">Meet the Team</h6>
          <div className="text">
            Write a brief description about the team culture.
          </div>
          <Image className="fullImage" src={stock1} alt="Stock Photo"></Image>
          <div className="imageCaption">A caption for the photo</div>
        </div>

        <div className="team">
          <div className="member">
            <Image className="photo" src={missingPhoto} alt="photo"></Image>
            <div className="name">Kate Cooper, Ph.D.</div>
            <div className="role">Principle Investigator</div>
          </div>

          <div className="member">
            <Image className="photo" src={missingPhoto} alt="photo"></Image>
            <div className="name">Dario Ghersi, M.D., Ph.D.</div>
            <div className="role">Co-Investigator</div>
          </div>

          <div className="member">
            <Image className="photo" src={missingPhoto} alt="photo"></Image>
            <div className="name">Kiran Bastola, Ph.D.</div>
            <div className="role">Co-Investigator</div>
          </div>

          <div className="member">
            <Image className="photo" src={missingPhoto} alt="photo"></Image>
            <div className="name">Ishwor Thapa</div>
            <div className="role">Technical Administrator</div>
          </div>

          <div className="member">
            <Image className="photo" src={missingPhoto} alt="photo"></Image>
            <div className="name">TBD</div>
            <div className="role">Graduate Assistant</div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="banner">
          <br></br>
          <h6 className="subheading">Join the Team</h6>
          <div className="text">
            Write a brief description of what you're looking for in a teammate.
          </div>
          <a href="https://www.google.com/" target="_blank">
            <button className="buttonTest">Apply Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
