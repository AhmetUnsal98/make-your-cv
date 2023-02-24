import React from "react";
import "./ieducation.scss";
const IEducationForm = () => {
  return (
    <div className="education">
      <div className="education-upper">
        <div className="education-column">
          <span>School Name</span>
          <input placeholder="School Name"></input>
        </div>
        <div className="education-column">
          <span>Degree</span>
          <input placeholder="Degree"></input>
        </div>
      </div>

      <div className="education-upper">
        <div className="education-column">
          <span>Starting Date</span>
          <div className="education-bottom">
            <input placeholder="DD"></input>
            <input placeholder="MM"></input>
            <input placeholder="YYYY"></input>
          </div>
        </div>

        <div className="education-column">
          <span>Finish Date</span>
          <div className="education-bottom">
            <input placeholder="DD"></input>
            <input placeholder="MM"></input>
            <input placeholder="YYYY"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IEducationForm;
