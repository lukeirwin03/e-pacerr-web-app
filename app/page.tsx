"use client";
import Image from "next/image";
import { SetStateAction, useState, useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import stock1 from "../stockImage1.png";
import stock2 from "../stockImage2.png";
import stock3 from "../stockImage3.png";
import stock4 from "../stockImage4.png";
import missingPhoto from "../missing-photo.png";
import kate_cooper from "../kate_cooper.jpeg";
import dario_ghersi from "../dario_ghersi.jpeg";
import kiran_bastola from "../kiran_bastola.jpeg";
import ishwor_thapa from "../ishwor_thapa.jpeg";
import alphafold from "../alphafold.gif";
// import SlideShow from "./components/SlideShow";

const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.75,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.75,
    },
  },
};

const slideIn = {
  initial: { opacity: 0, x: 50 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
    },
  }),
};

const teamMembers = [
  {
    name: "Kate Cooper, Ph.D.",
    photo: kate_cooper,
    role: "Principle Investigator",
    biography: "This is a biography for Dr. Kate Cooper. ",
    link: "https://www.unomaha.edu/college-of-information-science-and-technology/about/faculty-staff/kate-cooper.php",
  },
  {
    name: "Dario Ghersi, M.D., Ph.D.",
    photo: dario_ghersi,
    role: "Co-Investigator",
    biography: "This is a biography for Dr. Dario Ghersi.",
    link: "https://www.unomaha.edu/college-of-information-science-and-technology/about/faculty-staff/dario-ghersi.php",
  },
  {
    name: "Kiran Bastola, Ph.D.",
    photo: kiran_bastola,
    role: "Co-Investigator",
    biography: "This is a biography for Dr. Kiran Bastola.",
    link: "https://www.unomaha.edu/college-of-information-science-and-technology/about/faculty-staff/kiran-bastola.php",
  },
  {
    name: "Ishwor Thapa",
    photo: ishwor_thapa,
    role: "Technical Administrator",
    biography: "This is a biography for Ishwor Thapa.",
    link: "https://www.unomaha.edu/college-of-information-science-and-technology/about/faculty-staff/ishwor-thapa.php",
  },
  {
    name: "Mike Hartnett",
    photo: missingPhoto,
    role: "Graduate Assistant",
    biography: "This is a biography for Mike Hartnett.",
    link: "",
  },
  {
    name: "Luke Irwin",
    photo: missingPhoto,
    role: "Technology Coordinator",
    biography: "This is a biography for Luke Irwin.",
    link: "",
  },
];

const HomePage = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleMemberHover = (index: number | null) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    const newTimeout = setTimeout(() => {
      setSelectedMember(index);
    }, 200);

    setHoverTimeout(newTimeout);
  };

  const handleFocus = (index: number) => {
    setSelectedMember(index);
  };

  const handleBlur = () => {
    setSelectedMember(null);
  };

  useEffect(() => {
    if (selectedMember !== null) {
      linkRef.current?.focus(); 
    }
  }, [selectedMember]);

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

      <div className="waveSpacer peaks5"></div>

      <div className="container">
        <div className="first-section-separater"></div>

        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
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
              <Image className="picture" src={stock2} alt="stock picture" />
            </div>
          </div>
        </motion.div>

        <div className="section-separater"></div>

        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="section">
            <div className="section-content">
              <div className="section-header">What are Modules?</div>
              <p className="paragraph">
                Our modules will teach trainees about the bioinformatics
                community and how to engage with it. The content will be
                presented in various formats, including videos, quizzes, coding
                exercises, and open-access reading material. The project will
                consist of at least 12 major modules, and all assessments will
                be auto-graded. The project will complement ongoing training in
                bioinformatics education at any point in one's career, and the
                self-paced modules will enable users to compare their results
                and effectively join local, regional, and international science
                communities.
              </p>
            </div>
            <div className="picture-container">
              <Image className="picture" src={stock3} alt="stock3" />
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
            <motion.div
              key={index}
              variants={slideIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              tabIndex={0}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur()}
              onMouseEnter={() => handleMemberHover(index)}
              onMouseLeave={() => setSelectedMember(null)}
              className={`member ${selectedMember === index ? "selected" : ""}`}
            >
              <Image
                className="photo"
                src={member.photo}
                alt="member photo"
              ></Image>
              <div className="name">{member.name}</div>
              <div className="role">{member.role}</div>
              {selectedMember === index && (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{once : true}}
                  className="biography">
                  <p>{member.biography}</p>
                  {member.link && (<a className="link" target="_blank" ref={linkRef} href={member.link}>Link to UNO Biography</a>)}
                </motion.div>
              )}
            </motion.div>
          ))} 
        </div>

        <div className="waveSpacer peaks2"></div>
      </div>
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="section">
          <div className="signup-block">
            <h5 className="signup-header">Sign up for Updates!</h5>
            <div className="signup-content">
              If you want to know more about the program or receive information
              on how to join, please fill out this form:
              <br />
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
