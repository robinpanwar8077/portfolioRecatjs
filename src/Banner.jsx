"use client";

import React from "react";
import './Banner.css'
import robinImage from './Photo/Me.png';


const Banner = () => {
  return (
    <div className="banner__main  ">
      <div className="main__wrrp">
        <div className=" img__div   ">
          <img src={robinImage}  className="photo" alt="khushrobin" />
        </div>

        <div className=" div__name ">
          Robin Singh!
        </div>
        <p className=" para__headline ">
          I do Code &{" "}
          <span className="span__coolword">
            Chill
          </span>{" "}
          🍿
        </p>
        <p className=" para__tarrif  ">
          Passionate Software Engineer with a focus on React JS development,
          dedicated to crafting elegant and user-friendly Web applications.
        </p>
       
      </div>
    </div>
  );
};

export default Banner;
