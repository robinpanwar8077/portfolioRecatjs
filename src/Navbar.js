// Navbar.js
import React, { useState } from "react";
import '../src/App.css';
import { Link } from "react-router-dom";

function Navbar(props) {
  const[view,setview]= useState(false)
  function hndleclick(e){
   props.data(e)
    console.log("nav", e)

  }
function check(){
  setview(!view)
  console.log()

  
}
  return (
    <header className="flex justify-between p-5 bg-black text-white fixed w-[100vw]">
      <span className="self-center text-xl font-medium">Robin Singh</span>
      <nav>
        <ul className="  hidden md:flex gap-[13rem]   cursor-pointer">
          <li onClick={()=>hndleclick('bannershow')}>Home</li>
          <li onClick={()=>hndleclick('aboutshow')}>About</li>
          <li  onClick={()=>hndleclick('projectshow') }    className='cursor-pointer'   >Project</li>

          <Link to="/ResumeNew">
          <li>Resume</li></Link>
        </ul>
        <div   onClick={check} className="flex menu-container md:hidden ">
          <div ><i className="fa fa-bars" ></i></div>
        </div>
        {view===true? <ul className="menuoption">
          
          <Link to="/ResumeNew">
          <li className="rcv">Resume</li></Link>
        </ul>:""}
      </nav>
    </header>
  );
}

export default Navbar;
