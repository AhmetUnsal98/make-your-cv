import React from "react";
import "./icommunucation.scss";
import { IoAddCircleOutline } from "react-icons/io5";
const ICommuncationForm = () => {
  return (
    <div className="communucation">
      <div className="comm-wrapper">
        <div className="comm-column">
          <span>E-Mail</span>
          <input placeholder="E-Mail"></input>
        </div>
        <div className="comm-column">
          <span>Phone</span>
          <input placeholder="Phone"></input>
        </div>
      </div>
      <div className="comm-wrapper">
        <div className="comm-column">
          <span>Socail Media</span>
          <input placeholder="E-Mail"></input>
        </div>
        <div className="comm-column">
          <span>Link</span>
          <input placeholder="Phone"></input>
        </div>
        <div className="comm-column-button">
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default ICommuncationForm;
