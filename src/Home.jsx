import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import "./Home.css";
import Project from "./Project";
import Contect from "./Contect";
import Footer from "./Footer";

function Home() {
  const [activeSection, setactiveSection] = useState("bannershow");
  const viewref = {
    bannershow: useRef(null),
    aboutshow: useRef(null),
    projectshow: useRef(null),
  };
  console.log("mast", activeSection);
  useEffect(() => {
    const targetRef = viewref[activeSection];

    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });

  function show(e) {
    setactiveSection(e);
  }
  return (
    <div className="homediv">
      <div className="Navinfo">
        {" "}
        <Navbar data={show} />
      </div>

      <section className="homeinfo">
        <div
          ref={viewref.bannershow}
          className={`bannershow   ${
            activeSection === "bannershow" ? "active" : ""
          } `}
        >
          <Banner />
        </div>

        <div
          ref={viewref.aboutshow}
          className={`aboutshow ${
            activeSection === "aboutshow" ? "active" : ""
          }`}
        >
          <About />
        </div>
        <div
          ref={viewref.projectshow}
          className={`projectshow ${
            activeSection === "projectshow" ? "active" : ""
          }`}
        >
          <Project />
        </div>
        <div
          
        >
          <Contect/>
        </div>
        <Footer
          
        >
          <Footer/>
        </Footer>
      </section>
    </div>
  );
}

export default Home;
