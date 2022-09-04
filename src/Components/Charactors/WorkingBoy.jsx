import React from "react";
import boywithtable from "../../assets/boywithtable.png";
import chatgirl from "../../assets/chatgirl.png";
import chatleft from "../../assets/chatleft.png";
import chatlright from "../../assets/chatright.png";
import tree from "../../assets/tree.png";
import que from "../../assets/question.png";
import "./styles/WorkingBoy.scss";

const WorkingBoy = () => {
  return (
    <div className="workingboy_container">
      <img className="chatgirl upDown" src={chatgirl} alt="" />
      <img className="chatleft " src={chatleft} alt="" />
      <img className="tree" src={tree} alt="" />
      <img className="question upDown" src={que} alt="" />
      <img className="chatright" src={chatlright} alt="" />
      <img className="boy" src={boywithtable} alt="boy" />
    </div>
  );
};

export default WorkingBoy;
