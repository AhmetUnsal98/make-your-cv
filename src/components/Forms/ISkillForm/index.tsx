import React from "react";
import "./iskill.scss";
import { IoTrashBinOutline } from "react-icons/io5";
const ISkillForm = () => {
  return (
    <div className="skill">
      <div className="skill-half">
        <span>Add Your Skill</span>
        <div className="skill-row">
          {" "}
          <input placeholder="Skill Name"></input>
          <input placeholder="Level"></input>
          <IoTrashBinOutline className="trash" size={70} />
        </div>
      </div>
      <div className="skill-half">
        <span>Add Your Language</span>
        <div className="skill-row">
          <input placeholder="Langugage"></input>
          <input placeholder="Level"></input>
          <IoTrashBinOutline className="trash" size={70} />
        </div>
      </div>
    </div>
  );
};

export default ISkillForm;
