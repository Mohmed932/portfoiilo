import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="mainAbout"
      id="two"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1 className="ABOUT">
        ABOUT <span>AND</span> SKILLS
      </h1>
      <div className="About">
        <motion.div
          className="About-more"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="About-line">
            ABOUT<span></span>
          </div>
          <div className="About-word">
            <h1>Mern Stack Developer</h1>
            <p>
              I am proficient in MERN stack development,
              including MongoDB, Express.js, React.js, Node.js, and Next.js.
              Next.js is a popular framework built on top of React.js that allows for server-side rendering and efficient client-side rendering.
              With my expertise in these technologies, I have developed robust and scalable web applications.
              I have experience in both front-end and back-end development, and I stay updated with the latest industry trends and best practices.
              I am passionate about creating efficient and user-friendly web solutions and strive for excellence in my work.
            </p>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Birthday:25 may 2003</span>
            </div>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Phone: +201157068530</span>
            </div>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>City: Egypt Sharqiah Abu Kabir</span>
            </div>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Email: mohmedmahmoudfouad@gmail.com</span>
            </div>
            <div className="About-personal">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Freelance: Available</span>
            </div>
            <p>
              For the past four months, I've been designing and developing
              look-alike websites. Throughout this journey, I learned a lot of
              things about creating an awesome websites that meets the needs of
              the real businesses.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="About-skilis"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="About-line">
            SKILLS<span></span>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>html,css,js</span>
              <span>90%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>Reactjs,Nextjs</span>
              <span>86%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "90%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>Redux Toolkit</span>
              <span>78%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "85%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>Framer Motion</span>
              <span>65%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "95%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>Git,Github</span>
              <span>75%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "75%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>Nodejs,Expressjs</span>
              <span>83%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "83%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
          <div className="skilis">
            <div className="skilis-number">
              <span>mongoose,jwt,bcrypt</span>
              <span>79%</span>
            </div>
            <div className="skilis-speed">
              <motion.span
                className="only-skilis"
                whileInView={{ width: "79%" }}
                transition={{ duration: 1.1 }}
              ></motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
