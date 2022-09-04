import React from "react";
import "./styles/CourseCard.scss";
import Title from "./Title";

const CourseCard = ({ children, subtitle, title, commingSoon, overlayClass }) => {
  return (
    <div className={`courseCard ${overlayClass}` }>
     <Title fontSize='20px'>{subtitle}</Title>
      <h3>{title}</h3>
      <p>{children}</p>
      <div className="btns">
        {
            commingSoon ? <button>COMMING SOON</button> :
        
      (<><button>LEARN MORE</button><button>APPLY NOW</button></>)
    }
      </div>
      
    </div>
  );
};

export default CourseCard;
