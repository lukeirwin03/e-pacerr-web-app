"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import stock1 from "../stockImage1.png";
import stock2 from "../stockImage2.png";
import stock3 from "../stockImage3.png";
import stock4 from "../stockImage4.png";
import missingPhoto from "../missing-photo.png";
import alphafold from "../alphafold.gif";


const slideUp = {
  initial: { opacity: 0, y: 50, },
  animate: { opacity: 1, y: 0,
    transition: {
      delay: .15,
      duration: .75,
    }
  },
}

const fadeIn = {
  initial: { opacity: 0, },
  animate: { opacity: 1,
    transition: {
      delay: .5,
      duration: .75,
    }
  }
}

const slideIn = {
  initial: { opacity: 0, x: 50, },
  animate: ( index : number ) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: .1 * index,
      duration: .5,
    }
  }),
}

const teamMembers = [
  {
    name: "Kate Cooper, Ph.D.",
    photo: missingPhoto,
    role: "Principle Investigator",
  },
  {
    name: "Dario Ghersi, M.D., Ph.D.",
    photo: missingPhoto,
    role: "Co-Investigator",
  },
  {
    name: "Kiran Bastola, Ph.D.",
    photo: missingPhoto,
    role: "Co-Investigator",
  },
  {
    name: "Ishwor Thapa",
    photo: missingPhoto,
    role: "Technical Administrator",
  },
  {
    name: "Mike Hartnett",
    photo: missingPhoto,
    role: "Graduate Assistant",
  },
]


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
      {/* <div className="waveSpacer peaks4"></div> */}

      <div className="container">
        <div className="section-separater"></div>

        <motion.div
        variants={slideUp}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}>
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
              <Image className="picture" src={stock2} alt="stock picture"/>
            </div>
          </div>
        </motion.div>

        <div className="section-separater"></div>

        <motion.div
        variants={slideUp}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}>
        <div className="section">
          <div className="section-content">
            <div className="section-header">What are Modules?</div>
            <p className="paragraph">
              Our modules will teach trainees about the bioinformatics community
              and how to engage with it. The content will be presented in
              various formats, including videos, quizzes, coding exercises, and
              open-access reading material. The project will consist of at least
              12 major modules, and all assessments will be auto-graded. The
              project will complement ongoing training in bioinformatics
              education at any point in one's career, and the self-paced modules
              will enable users to compare their results and effectively join
              local, regional, and international science communities.
              {/* <br />
              <br />
              The topics to be covered include professionalism, tenets of
              reproducibility and replicability, standards for excellence,
              technical writing skills, best practices for data and code
              sharing, and advocacy in research. */}
            </p>
          </div>
          <div className="picture-container">
            <Image className="picture" src={stock3} alt="stock3"/>
          </div>
          </div>
        </motion.div>
        <div className="section-separater"></div>
      </div>

      <div className="waveSpacer peaks1"></div>

      <div className="team-banner">
        <div className="section-header">Our Team</div>

        <div className="team">
          {teamMembers.map((member, index) => (
            <motion.div key={index}
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            custom={index}
            // whileHover={{ scale: [null, 1.10, 1.05] }}
            className="member">
                <Image className="photo" src={member.photo} alt="member photo"></Image>
                <div className="name">{member.name}</div>
                <div className="role">{member.role}</div>
            </motion.div>
          ))}
        </div>

        <div className="waveSpacer peaks2"></div>
      </div>
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}>
        <div className="section">
          <div className="signup-block">
            <h5 className="signup-header">Sign up for Updates!</h5>
            <div className="signup-content">
              If you want to know more about the program or receive information on
              how to join, please fill out this form:
              <br></br>
              <a href="https://tinyurl.com/epacerr-interest" target="_blank">
                <button className="take-action">Take Action</button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default HomePage;
