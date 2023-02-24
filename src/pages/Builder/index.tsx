import React, { useState } from "react";
import "./builder.scss";
import { BuilderLayout } from "../../layouts/BuilderLayout";
import IPersonal from "../../components/Forms/IPersonalForm";
import ICommuncationForm from "../../components/Forms/ICommunucationForm";
import IEducationForm from "../../components/Forms/IEducationForm";
import ISkillForm from "../../components/Forms/ISkillForm";
const BuildPage = () => {
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(25);

  const PageDisplay = () => {
    if (page === 1) {
      return <IPersonal />;
    } else if (page === 2) {
      return <IEducationForm />;
    } else if (page === 3) {
      return <ISkillForm />;
    } else if (page === 4) {
      return <ICommuncationForm />;
    }
  };

  return (
    <BuilderLayout>
      <div className="builder">
        <div className="progress-bar">
          <div style={{ width: `${page * 25}%` }} className="progressing"></div>
        </div>
        <h1>Please Tell About Yourself</h1>
        <div className="build-form">
          <div className="form-selector">
            <span
              onClick={() => setPage(1)}
              className={page === 1 ? "tag active" : "tag"}
            >
              Personal Informations
            </span>
            <span
              onClick={() => setPage(2)}
              className={page === 2 ? "tag active" : "tag"}
            >
              Educational Informations
            </span>
            <span
              onClick={() => setPage(3)}
              className={page === 3 ? "tag active" : "tag"}
            >
              Skills & Languages
            </span>
            <span
              onClick={() => setPage(4)}
              className={page === 4 ? "tag active" : "tag"}
            >
              Communcation & Socail Media
            </span>
          </div>
          <div style={{ height: "auto", width: "100%" }}>{PageDisplay()}</div>
          <div className="build-forms-buttons">
            <button
              disabled={page === 1}
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
              className="prev-button"
            >
              PREV
            </button>
            <button
              disabled={page === 4}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
              className="next-button"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </BuilderLayout>
  );
};

export default BuildPage;
