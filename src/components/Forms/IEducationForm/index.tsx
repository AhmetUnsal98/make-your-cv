import React from "react";
import "./ieducation.scss";
const IEducationForm = ({ resumeData, setResumeData }: any) => {
  return (
    <div className="education">
      <div className="education-upper">
        <div className="education-column">
          <span>School Name</span>
          <input
            type="text"
            value={resumeData.schoolName}
            onChange={(e) => {
              setResumeData({ ...resumeData, schoolName: e.target.value });
            }}
          ></input>
        </div>
        <div className="education-column">
          <span>Degree</span>
          <input
            type="text"
            value={resumeData.degree}
            onChange={(e) => {
              setResumeData({ ...resumeData, degree: e.target.value });
            }}
          ></input>
        </div>
      </div>

      <div className="education-upper">
        <div className="education-column">
          <span>Starting Date</span>
          <div className="education-bottom">
            <input
              type="date"
              value={resumeData.eduStartDate}
              onChange={(e) => {
                setResumeData({ ...resumeData, eduStartDate: e.target.value });
              }}
            ></input>
          </div>
        </div>

        <div className="education-column">
          <span>Finish Date</span>
          <div className="education-bottom">
            <input
              type="date"
              placeholder=""
              value={resumeData.eduFinishDate}
              onChange={(e) => {
                setResumeData({ ...resumeData, eduFinishDate: e.target.value });
              }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IEducationForm;
