import { Button } from "antd";
import React from "react";
import Alumni from "../Alumni/Alumni";
import WorkingBoy from "../Charactors/WorkingBoy";
import Title from "../Common/Title";
import { Course } from "../CourseDetails/Coursedetails";

import Courses from "../Courses/Courses";
import Cursor from "../Cursor/Cursor";
import Navbar from "../Navbar/Navbar";
import ScrollDown from "../ScrollDown/ScrollDown";
import "./Landing.scss";

const Landing = () => {
    return (
        <>
        <Navbar/>
        <div className="landing_container">
            <div className="title">
                <Title fontSize='20px'>What we do?</Title>
                <h1 className="hovered">Building World's <br /> Next Generation of Software Professionals</h1>
                <p>We offer in-depth training from real world industry experts</p>
                <button className="applynow" >APPLY NOW</button>
            </div>
            <div className="character">
                <WorkingBoy />
            </div>
        </div>
        <ScrollDown />
        <Alumni />
        <Courses/>
        <Course/>
   
        </>
    );
 };

 export default Landing;