import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import './Contect.css'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Contect() {
  return (
  <div className="socilicondiv">

<h1 className="findeme">FIND ME ON</h1>

            <ul className="iconlist">
            <li className="social-icons">
                <a
                  href="https://github.com/robinpanwar8077"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/robinsingh1723/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_saheb__g_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>

  </div>
  )
}

export default Contect