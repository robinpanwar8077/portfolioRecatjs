import React from "react";
import "./project.css";
import logos from "./Photo/monkoodog_white_svg_logo.svg";
import slogo from "./Photo/order-food.png";
import epad from "./Photo/note.png";

function Project() {
  return (
    <section id="projects">
      <h1 className=" projectheading">PROJECTS</h1>
      <p className=" title__head">EXPLORE NOW</p>
      <div className="projectinfo ">
        <div className="projectcon">
          <div className=" projectone">
            <a
              href="https://monkoodog-nextjs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logos} height={150} width={150} alt="monkoodog" />

              <div className="p-3">
                <p className="paraofprojectheading">Monkoodog</p>
                <p className="infoofproject">
                  Monkoodog is an online platform for pets. It provides
                  veterinary content for pets, as well as a range of products
                  for pets. For this application, we use ReactJS, Firebase, and
                  Tailwind CSS.
                </p>
              </div>
            </a>
          </div>
          <div className=" projectone">
            <a
              href="https://foodhood.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logophoto"
                style={{ height: "39px" }}
                src={slogo}
                alt="foodhood"
              />

              <div className="p-3">
                <p className="paraofprojectheading">Foodhood</p>
                <p className="infoofproject">
                  Foodhood is an online food delivery platform, providing a
                  user-friendly web application. The technology stack includes
                  React for the front end, HTML and CSS for styling, JavaScript
                  for interactivity, and a JSON server for data handling.
                  note: for use this app please connect me 
                </p>
              </div>
            </a>
          </div>
          <div className=" projectone">
            <a
              href="https://talkifylink.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logophoto"
                style={{ height: "39px" }}
                src={epad}
                alt="edcodepad"
              />

              <div className="p-3">
                <p className="paraofprojectheading">talkifylink</p>
                <p className="infoofproject">
                  Chatorcat is part of the admin panel where consumers can talk
                  with the sales executive. It is built with React and Firebase
                  Realtime Database.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
