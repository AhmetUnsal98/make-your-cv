import React from "react";
import "./ipersonal.scss";
import { IoPersonAddOutline } from "react-icons/io5";
import { Formik } from "formik";

const IPersonalForm = ({ resumeData, setResumeData }: any) => {
  return (
    <div className="ipersonal">
      <div className="ipersonal">
        <div className="left-personal">
          <span>Your Name Surname</span>
          <input
            type="text"
            value={resumeData.fullName}
            onChange={(e) => {
              setResumeData({ ...resumeData, fullName: e.target.value });
            }}
          ></input>
          <span>Your Birthday</span>
          <input
            type="text"
            value={resumeData.birthDate}
            onChange={(e) => {
              setResumeData({ ...resumeData, birthDate: e.target.value });
            }}
          ></input>
          <span>Your Title</span>
          <input
            type="text"
            value={resumeData.title}
            onChange={(e) => {
              setResumeData({ ...resumeData, title: e.target.value });
            }}
          ></input>
        </div>
        <div className="right-personal">
          <div className="person-container">
            <IoPersonAddOutline type="file" color="white" size={60} />
          </div>
          <span>Fotoğrafını Yükle</span>
        </div>
      </div>
    </div>
  );
};

export default IPersonalForm;
