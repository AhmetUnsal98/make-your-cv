import React, { CSSProperties, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { uid } from "uid";
import { ResumeModel } from "../../lib/ResumeModel";
import "./resume.scss";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "purple",
  position: "absolute",
  left: "50%",
  top: "50%",
};
export const Resumes = () => {
  const resumes = useSelector((state: any) => state.resume.initialResumeState);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const skills = useSelector(
    (state: any) => state.resume.initialSkillsState.skills
  );
  const languages = useSelector(
    (state: any) => state.resume.initialLanguagesState.languages
  );
  const socials = useSelector(
    (state: any) => state.resume.initialSocialitiesState.socials
  );
  const experiences = useSelector(
    (state: any) => state.resume.initialExperiencesState.experiences
  );

  const [currentResume, setCurrentResume] = useState<ResumeModel>({
    id: uid(),
    fullName: "",
    birthDate: "",
    title: "",
    schoolName: "",
    degree: "",
    eduStartDate: "",
    eduFinishDate: "",
    skills: skills,
    languages: languages,
    socials: socials,
    email: "",
    phone: "",
    experiences: experiences,
  });
  useEffect(() => {
    //Finding resume
    for (var i = 0; i < resumes.length; i++) {
      if (resumes[i].id === id) {
        setCurrentResume(resumes[i]);
      }
    }
  }, []);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <ClipLoader cssOverride={override} loading={loading} size={100} />
      ) : (
        <div className="resume">
          <div className="wrapper">
            <div className="resume-header">
              <div className="left-wrapper-header">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <h2>{currentResume.fullName}</h2>
                  <p>{"( " + currentResume.title + " )"}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="comm">
                    <b>??leti??im : </b> {currentResume.phone} /
                    {currentResume.email}
                  </p>
                  {currentResume.socials.map((item: any) => (
                    <p className="comm">
                      <b>{item.socialName} : </b> {item.link}
                    </p>
                  ))}
                </div>
              </div>
              <div className="right-wrapper-header">
                <div className="profile-photo">Photo</div>
              </div>
            </div>
            <div className="section-name">
              <h2>Ki??isel Bilgilerim</h2>
            </div>
            <div className="resume-row">
              <div className="left-wrapper">
                <p>
                  <b>Ad Soyad :</b>
                </p>
                <p>
                  <b>Do??um Tarihi :</b>
                </p>
                <p>
                  <b>Ya??ad?????? Yer :</b>
                </p>
              </div>
              <div className="right-wrapper">
                <p>{currentResume.fullName}</p>
                <p>{currentResume.birthDate}</p>
                <p>Ankara</p>
              </div>
            </div>
            <div className="section-name">
              <h2>E??itim Bilgilerim</h2>
            </div>
            <div className="resume-row">
              <div className="left-wrapper">
                <p>
                  <b>Okul Ad?? :</b>
                </p>
                <p>
                  <b>Program Ad?? :</b>
                </p>
                <p>
                  <b>Ba??lang???? Biti?? Y??l?? :</b>
                </p>
              </div>
              <div className="right-wrapper">
                <p>{currentResume.schoolName}</p>
                <p>{currentResume.degree}</p>
                <p>
                  {currentResume.eduStartDate} - {currentResume.eduFinishDate}
                </p>
              </div>
            </div>
            <div className="section-name">
              <h2>???? Deneyimlerim</h2>
            </div>
            {currentResume.experiences.map((item: any) => (
              <div className="resume-row">
                <div className="left-wrapper">
                  <p>
                    <b>Firma Ad?? :</b>
                  </p>
                  <p>
                    <b>??al??????lan B??l??m :</b>
                  </p>
                  <p>
                    <b>Ba??lang???? Biti?? Y??l?? :</b>
                  </p>
                  <p>
                    <b>A????klama :</b>
                  </p>
                </div>
                <div className="right-wrapper">
                  <p>{item.inputs.companyName}</p>
                  <p>{item.inputs.jobTitle}</p>
                  <p>
                    {item.inputs.expStartingDate} -{" "}
                    {item.inputs.expFinishingDate}
                  </p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="section-name">
              <h2>Yetenkelerim</h2>
            </div>
            {currentResume.skills?.map((item: any) => (
              <div className="resume-row">
                <div className="left-wrapper">
                  <p>
                    <b>{item.skillName}</b>
                  </p>
                </div>
                <div className="right-wrapper">
                  <p>{item.skillLevel}</p>
                </div>
              </div>
            ))}
            <div className="section-name">
              <h2>Dillerim</h2>
            </div>
            {languages.map((item: any) => (
              <div className="resume-row">
                <div className="left-wrapper">
                  <p>
                    <b>{item.languageName}</b>
                  </p>
                </div>
                <div className="right-wrapper">
                  <p>{item.languageLevel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
