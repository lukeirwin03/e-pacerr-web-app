import styles from "./page.module.css";
import Image from "next/image";
import logoPic from "../e-pacerr_logo_negative.png";
import stock1 from "../stockImage1.png";
import stock2 from "../stockImage2.png";
import stock3 from "../stockImage3.png";
import stock4 from "../stockImage4.png";

const HomePage = () => {

  return (
    <div className="content">
      <div className="landingPageHeader">
        <Image className='logoImage' src={logoPic} alt='E-PACERR Logo'></Image>
        <div className="landingSecondaryHeader">
          <b><u>E</u></b>nhancing{" "}
          <b><u>P</u></b>rofessionalism,{" "}
          <b><u>A</u></b>dvocacy, and{" "}
          <b><u>C</u></b>apacity for{" "}
          <b><u>E</u></b>xcellence in{" "}
          <b><u>R</u></b>esposible Bioinformatics{" "}
          <b><u>R</u></b>esearch
        </div>
      </div>

      <div className="container">
        <div className="sectionHeader">PROJECT AIMS</div>
        <p className="paragraph">
          This project will develop free, open, self-paced online modules on the
          Canvas LMS for exposing and educating bioinformatics trainees on
          knowledge that is typically considered to be outside of formal
          training in a traditional research education program. The topics to be
          covered include professionalism, tenets of reproducibility and
          replicability, standards for excellence, technical writing skills,
          best practices for data and code sharing, and advocacy in research. By
          exposing trainees to this knowledge, which can often be institutional
          and dependent on mentorship, we will (1) build confidence in trainees’
          ability to perform reproducible research in their own laboratory,
          research group, or workplace setting; (2) support a more active and
          engaged bioinformatics research workforce; and (3) provide a piloted
          curriculum for other bioinformatics research training programs to
          implement in their own educational settings.
        </p>
      </div>

      <div className="learnMore">
        <div className="item">
          <div className="thumbnailContainer">
            <Image className="thumbnail" src={stock1} alt="Stock Photo"></Image>
          </div>
          <div className="itemContent">
            <h5 className="contentHeader">Enroll in the Pilot Study</h5>
            <br></br>
            <p className="paragraph">
              Click here to Enroll in our Open Courses Pilot Study!
            </p>
          </div>
        </div>

        <div className="item">
          <div className="thumbnailContainer">
            <Image className="thumbnail" src={stock2} alt="Stock Photo"></Image>
          </div>
          <div className="itemContent">
            <h5 className="contentHeader">About E-PACERR</h5>
            <br></br>
            <p className="paragraph">
              Direct trainings on ethics, responsible research, or
              professionalism are notably absent in most formal training in
              bioinformatics
            </p>
          </div>
        </div>

        <div className="item">
          <div className="thumbnailContainer">
            <Image className="thumbnail" src={stock3} alt="Stock Photo"></Image>
          </div>
          <div className="itemContent">
            <h5 className="contentHeader">Meet the Team</h5>
            <br></br>
            <p className="paragraph">
              Meet the hardworking leadership team that makes this program
              possible!
            </p>
          </div>
        </div>

        <div className="item">
          <div className="thumbnailContainer">
            <Image className="thumbnail" src={stock4} alt="Stock Photo"></Image>
          </div>
          <div className="itemContent">
            <h5 className="contentHeader">Sign up for Updates</h5>
            <br></br>
            <p className="paragraph">
              Get notified as new modules and other new updates are posted!
            </p>
          </div>
        </div>
        <div className="signUpBlock">
          <h5 className="signUpBlockHeader">Sign up for Updates!</h5>
          <div className="signUpBlockContent">
            If you want to know more about the program or receive information on
            how to join, please fill out this form:
            <br></br>
            <a href="https://tinyurl.com/epacerr-interest" target="_blank">
              <button className="buttonTest">Take Action</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
