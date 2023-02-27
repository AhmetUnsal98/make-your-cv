import React, { useState } from "react";
import "./icommunucation.scss";
import { IoAddCircleOutline, IoTrashBinOutline } from "react-icons/io5";
import { uid } from "uid";

const ICommuncationForm = ({ resumeData, setResumeData }: any) => {
  const [socialName, setSocialName] = useState("");
  const [link, setLink] = useState("");
  const [socialMedias, setSocialMedias] = useState([] as any);
  return (
    <div className="communucation">
      <div className="comm-wrapper">
        <div className="comm-column">
          <span>E-Mail</span>
          <input
            type="text"
            value={resumeData.email}
            onChange={(e) => {
              setResumeData({ ...resumeData, email: e.target.value });
            }}
          ></input>
        </div>
        <div className="comm-column">
          <span>Phone</span>
          <input
            type="text"
            value={resumeData.phone}
            onChange={(e) => {
              setResumeData({ ...resumeData, phone: e.target.value });
            }}
          ></input>
        </div>
      </div>
      <div className="comm-wrapper">
        <div className="comm-column">
          <span>Socail Media</span>
          <input
            type="text"
            value={socialName}
            onChange={(e) => {
              setSocialName(e.target.value);
            }}
          ></input>
        </div>
        <div className="comm-column">
          <span>Link</span>
          <input
            type="text"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          ></input>
        </div>
        <div className="comm-column-button">
          <button
            onClick={() => {
              setSocialMedias([
                ...socialMedias,
                { id: uid(), socialName, link },
              ]);
              setSocialName("");
              setLink("");
              setResumeData({ ...resumeData, socialMedias: socialMedias });
            }}
          >
            Add
          </button>
        </div>
      </div>
      {socialMedias.map((item: any) => (
        <div className="social-media-set">
          <p>Social Media : {item.socialName}</p>
          <p>Link : {item.link}</p>
          <IoTrashBinOutline
            onClick={() => {
              setSocialMedias(
                socialMedias.filter((sk: any) => sk.id !== item.id)
              );
              setResumeData({ ...resumeData, socialMedias: socialMedias });
            }}
            style={{ cursor: "pointer" }}
            color="gray"
            size={30}
          />
        </div>
      ))}
    </div>
  );
};

export default ICommuncationForm;
