 import React from "react"
 import './About.css'

import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
 
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function About(){
    return(
        <>
      <section className=" about__section" id='#about'>
        <div className="about__div">
        <h1 className="about__title">About</h1>
            <p></p>
            <p className=" about__para">
            Hi Everyone, I am <span className="purple">Robin Singh </span>
            from <span className="purple"> Gurgaon, India.</span>
            <br />
           
            I am a frontend web developer with one year of experience.
            <br />
            <br />
            
          With a fervor for crafting elegant solutions, I navigate the
          ever-evolving landscape of software development. My journey involves
          translating concepts into code, creating seamless user experiences,
          and constantly pushing the boundaries of what&#39;s possible
        </p>
        <div className="Skill__div">
        <h1 className="Skill__title">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row className="projectinfo ">
    
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      
     
    
      
    </Row>
  


        </div>
        </div>
      </section>
        </>
    )
}
export default About