import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const messageLength = `I am available to work on my own. Contact me via and connect to my account.`
  const [name, setname] = useState("mohmed mahmouad fouad")
  const [email, setEmail] = useState("email")
  const [message, setmessage] = useState(messageLength)
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  return (
    <motion.div
      className="Contact-me"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1>
        CONTACT <span>ME</span>
      </h1>
      <div className="Contact" id="five">
        <motion.div
          className="Contact-deal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://protfilo-by-js.vercel.app/image/Delivery.webp"
            alt="deal"
          />
          <span>do free work</span>
          <span>
            I am available to work on my own. Contact me via and connect to my
            account.
          </span>
          <div className="Contact-icon">
            <a
              href="https://www.facebook.com/Anamohmed135"
              target="blank"
              className="Contact-icon-facebook"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/Anamohmed00" target="blank">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohmedmahmoudfouad"
              target="blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Mohmed932" target="blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="Contact-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <form action="https://formspree.io/f/mvongvoe" method="post">
            <div className="main-form">
              <label htmlFor="name">Your Name</label>
              <input
                name="name"
                id="name"
                type="name"
                onChange={(e) => setname(e.target.value)}
                required
              />
              {name.length >= 20 ? "" : <span>Your name must contain more than 10 characters</span>}
            </div>
            <div className="main-form">
              <label htmlFor="email">Your Email</label>
              <input
                name="Email"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {email.length > 0 ? "" : <span>It must not be empty</span>}
              {validateEmail(email) === false&email.length > 6 ? <span>Valid email</span> : ""}
            </div>
            <div className="main-form">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                type="message"
                className="Contact-message"
                onChange={(e) => setmessage(e.target.value)}
                required
              />
              {message.length >= 50 ? "" : <span>Your message must contain more than 50 characters</span>}
            </div>
            {name.length > 15 & message.length > 50 &validateEmail(email)===true? <button type="submit" className="btn">
              Submit
            </button> : ''}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;