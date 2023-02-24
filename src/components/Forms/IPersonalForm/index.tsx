import React from "react";
import "./ipersonal.scss";
import { IoPersonAddOutline } from "react-icons/io5";
const IPersonalForm = () => {
  console.log("IPersonalForm");
  return (
    <div className="ipersonal">
      <div className="left-personal">
        <span>Your Name Surname</span>
        <input placeholder="Your Name"></input>
        <span>Your Birthday</span>
        <input placeholder="Your Surname"></input>
        <span>Job Title</span>
        <input placeholder="Your Age"></input>
      </div>

      <div className="right-personal">
        <div className="person-container">
          <IoPersonAddOutline type="file" color="white" size={60} />
        </div>
        <span>Fotoğrafını Yükle</span>
      </div>
    </div>
  );
};

export default IPersonalForm;
