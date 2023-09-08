"use client";
import Image from "next/image";
import stock1 from "../stockImage1.png";
import stock2 from "../stockImage2.png";
import stock3 from "../stockImage3.png";
import stock4 from "../stockImage4.png";
import missingPhoto from "../missing-photo.png";
import alphafold from "../alphafold.gif";

const HomePage = () => {
  return (
    <div className="content">
      <div className="landing-banner">
        <div className="banner-content">
        <div className="landing-header">
            <b><u>E</u></b>nhancing<br/>
            <b><u>P</u></b>rofessionalism,<br/>
            <b><u>A</u></b>dvocacy, and<br/>
            <b><u>C</u></b>apacity for<br/>
            <b><u>E</u></b>xcellence in<br/>
            <b><u>R</u></b>esposible Bioinformatics<br/>
            <b><u>R</u></b>esearch
          </div>
          <div className="gif">
            <Image src={alphafold} alt="gif" className="gif"></Image>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section-separater"></div>

        <div className="section">
          <div className="section-content">
            <div className="section-header">Our Mission</div>
            <p className="paragraph">
              The E-PACERR project outcome will be to develop free, open,
              self-paced online modules on the Canvas LMS for exposing and
              educating bioinformatics trainees on knowledge that is typically
              considered to be outside of formal training in a traditional
              research education program.{" "}
            </p>
          </div>
          <div className="picture-container">
            <Image className="picture" src={stock2} alt="stock picture"></Image>
          </div>
        </div>

        <div className="section-separater"></div>

        <div className="section">
          <div className="section-content">
            <div className="section-header">What are Modules?</div>
            <p className="paragraph">
            Our modules will teach trainees about the bioinformatics community
            and how to engage with it. The content will be presented in various
            formats, including videos, quizzes, coding exercises, and
            open-access reading material. The project will consist of at least
            12 major modules, and all assessments will be auto-graded. The
            project will complement ongoing training in bioinformatics education
            at any point in one's career, and the self-paced modules will enable
            users to compare their results and effectively join local, regional,
            and international science communities.
            <br />
            <br />
            The topics to be covered include professionalism, tenets of
            reproducibility and replicability, standards for excellence,
            technical writing skills, best practices for data and code sharing,
            and advocacy in research.
          </p>
          </div>
          <div className="picture-container">
             
          </div>
        </div>
        <div className="section-separater"></div>
      </div>

      {/* <div className="learnMore">
        

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
      </div> */}

      <div className="waveSpacer peaks1"></div>

      <div className="banner">
        <div className="section-header">LEADERSHIP</div>

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

        <div className="waveSpacer peaks2"></div>
      </div>

      <div className="section"></div>

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
  );
};
export default HomePage;
