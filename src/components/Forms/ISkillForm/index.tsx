import React, { useEffect, useState } from "react";
import "./iskill.scss";
import { IoAddCircleOutline, IoTrashBinOutline } from "react-icons/io5";
import { uid } from "uid";
import { useSelector, useDispatch } from "react-redux";
import { addToSkills } from "../../../redux/resumeSlice";
const ISkillForm = ({ resumeData, setResumeData }: any) => {
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  const [languageName, setLanguageName] = useState("");
  const [languageLevel, setLanguageLevel] = useState("");

  const dispatch = useDispatch();
  const skills = useSelector(
    (state: any) => state.resume.initialSkillsState.skills
  );
  const languages = useSelector(
    (state: any) => state.resume.initialLanguagesState.languages
  );

  return (
    <div className="skill">
      <div className="skill-half">
        <span>Add Your Skill</span>

        <div className="skill-row">
          <input
            type="text"
            name="skill"
            placeholder="Skill Name"
            value={skillName}
            onChange={(e) => {
              setSkillName(e.target.value);
            }}
          ></input>
          <input
            type="text"
            name="skillLevel"
            placeholder="Level"
            value={skillLevel}
            onChange={(e) => {
              setSkillLevel(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setSkillName("");
              setSkillLevel("");
              dispatch(addToSkills({ id: uid(), skillName, skillLevel }));
              setResumeData({ ...resumeData, skills: skills });
            }}
          >
            <IoAddCircleOutline className="trash" size={40} />
          </button>
        </div>
        {skills?.map((item: any) => (
          <div className="skill-set">
            <div className="skill-set-name">
              <p>Skill Name : {item.skillName}</p>
            </div>
            <div className="skill-set-name">
              <p>Skill Level : {item.skillLevel}</p>
            </div>
            <div>
              <IoTrashBinOutline
                style={{ cursor: "pointer" }}
                color="gray"
                size={30}
                onClick={() => {
                  setResumeData({ ...resumeData, skills: skills });
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="skill-half">
        <span>Add Your Language</span>

        <div className="skill-row">
          <input
            type="text"
            name="language"
            placeholder="Language"
            value={languageName}
            onChange={(e) => {
              setLanguageName(e.target.value);
            }}
          ></input>
          <input
            type="text"
            name="languageLevel"
            placeholder="Level"
            value={languageLevel}
            onChange={(e) => {
              setLanguageLevel(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            onClick={() => {
              setLanguageName("");
              setLanguageLevel("");
              setResumeData({ ...resumeData, languages: languages });
            }}
          >
            <IoAddCircleOutline className="trash" size={40} />
          </button>
        </div>
        {languages?.map((item: any) => (
          <div className="skill-set">
            <div className="skill-set-name">
              <p>Skill Name : {item.languageName}</p>
            </div>
            <div className="skill-set-name">
              <p>Skill Level : {item.languageLevel}</p>
            </div>
            <div>
              <IoTrashBinOutline
                style={{ cursor: "pointer" }}
                color="gray"
                size={30}
                onClick={() => {
                  setResumeData({ ...resumeData, languages: languages });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ISkillForm;
