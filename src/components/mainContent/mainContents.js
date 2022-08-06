import React from "react";
import "./MainContent.scss";
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <main>
      <h3 className="about-title">About</h3>
      <p className="about-text">
        I am a frontend developer with a particular interest in making
        user-friendly UI Designs. I try to learn daily to improve my growth.
      </p>
      <h3 className="int-title">Interest</h3>
      <p className="int-text">
        Music Lover, Reader, Internet fanatic, Nature Explorer, Newbie Developer
      </p>
    </main>
  );
}

export default function MainContent() {
  return (
    <div className="App">
      <div className="detail">
        <h3 className="the-name">Ruttika Jadhav</h3>
        <h4 className="profile">Frontend Developer</h4>
        <a className="medium" href="https://medium.com/@ruru.rj">
          ruru.rj
        </a>
      </div>
      <ul className="btn-list">
        <li className="list-item1">
          <HiMail style={{ fontSize: "24px" }} />
          <a className="btn1" href="mailto:ruttikajadhav@gmail.com">
            Email
          </a>
        </li>
        <li className="list-item2">
          <FaLinkedin style={{ color: "#fff", fontSize: "24px" }} />
          <a
            className="btn2"
            href="https://www.linkedin.com/in/ruttika-jadhav-31717122b/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <About />
    </div>
  );
}
