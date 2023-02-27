import React, { useState } from "react";
import "./iexperience.scss";
import { IoTrashBinOutline } from "react-icons/io5";
import { uid } from "uid";
const IExperienceForm = ({ resumeData, setResumeData }: any) => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [finishingDate, setFinishingDate] = useState("");
  const [desc, setDesc] = useState("");
  const [experiences, setExperiences] = useState([] as any);
  return (
    <div className="education">
      <div className="education-upper">
        <div className="education-column">
          <span>Company Name</span>
          <input
            type="text"
            name="companyName"
            placeholder=""
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          ></input>
        </div>
        <div className="education-column">
          <span>Job Title</span>
          <input
            type="text"
            name="jobTitle"
            placeholder=""
            value={jobTitle}
            onChange={(e) => {
              setJobTitle(e.target.value);
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
              name="startingDate"
              placeholder=""
              value={startingDate}
              onChange={(e) => {
                setStartingDate(e.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="education-column">
          <span>Finish Date</span>
          <div className="education-bottom">
            <input
              type="date"
              name="finishingDate"
              placeholder=""
              value={finishingDate}
              onChange={(e) => {
                setFinishingDate(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className="description">
        <span>Job Description</span>
        <input
          type="text"
          className="desc"
          name="desc"
          placeholder=""
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setExperiences([
              ...experiences,
              { id: uid(16), companyName, startingDate, finishingDate, desc },
            ]);
            setCompanyName("");
            setStartingDate("");
            setFinishingDate("");
            setDesc("");
            setResumeData({ ...resumeData, experiences: experiences });
          }}
        >
          Ekle
        </button>
        {experiences.map((item: any) => (
          <div className="exp-set">
            <p>Company Name : {item.companyName}</p>
            <p> Title : {item.jobTitle}</p>
            <IoTrashBinOutline
              onClick={() => {
                setExperiences(
                  experiences.filter((sk: any) => sk.id !== item.id)
                );
                setResumeData({ ...resumeData, experiences: experiences });
              }}
              size={30}
              color="gray"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IExperienceForm;
