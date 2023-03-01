import React, { useState } from "react";
import "./iexperience.scss";
import { IoTrashBinOutline } from "react-icons/io5";
import { uid } from "uid";
import { useSelector, useDispatch } from "react-redux";
import {
  addToExperiences,
  removeFromExperiences,
} from "../../../redux/resumeSlice";
const IExperienceForm = ({ resumeData, setResumeData }: any) => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [finishingDate, setFinishingDate] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();
  const experiences = useSelector(
    (state: any) => state.resume.initialExperiencesState.experiences
  );
  function clearInputs() {
    setCompanyName("");
    setJobTitle("");
    setStartingDate("");
    setFinishingDate("");
    setDesc("");
  }
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
            dispatch(
              addToExperiences({
                id: uid(),
                companyName: companyName,
                jobTitle: jobTitle,
                expStartingDate: startingDate,
                expFinishDate: finishingDate,
                desc: desc,
              })
            );
            clearInputs();
          }}
        >
          Ekle
        </button>
        {experiences?.map((item: any) => (
          <div className="exp-set">
            <p>Company Name : {item.companyName}</p>
            <p> Title : {item.jobTitle}</p>
            <IoTrashBinOutline
              onClick={() => {
                dispatch(removeFromExperiences(item.id));
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
