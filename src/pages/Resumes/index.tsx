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
  const resume = useSelector((state: any) => state.resume.initialResumeState);
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
    for (var i = 0; i < resume.length; i++) {
      if (resume[i].id === id) {
        setCurrentResume(resume[i]);
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
                  <h2>Ahmet Ünsal</h2>
                  <p>{"(Junior FrontEnd Developer)"}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="comm">
                    <b>İletişim:</b> 0507 783 81 92 / unsalahmet1998@outlook.com
                  </p>
                  <p className="comm">
                    <b>Linkedin:</b> 0507 783 81 92 / unsalahmet1998@outlook.com
                  </p>
                  <p className="comm">
                    <b>Medium:</b> 0507 783 81 92 / unsalahmet1998@outlook.com
                  </p>
                  <p className="comm">
                    <b>Github:</b> 0507 783 81 92 / unsalahmet1998@outlook.com
                  </p>
                </div>
              </div>
              <div className="right-wrapper-header">
                <div className="profile-photo">Photo</div>
              </div>
            </div>
            <div className="section-name">
              <h2>Kişisel Bilgilerim</h2>
            </div>
            <div className="resume-row">
              <div className="left-wrapper">
                <p>
                  <b>Ad Soyad :</b>
                </p>
                <p>
                  <b>Doğum Tarihi :</b>
                </p>
                <p>
                  <b>Yaşadığı Yer :</b>
                </p>
              </div>
              <div className="right-wrapper">
                <p>Ahmet Ünsal</p>
                <p>19.07.1998</p>
                <p>Ankara</p>
              </div>
            </div>
            <div className="section-name">
              <h2>Eğitim Bilgilerim</h2>
            </div>
            <div className="resume-row">
              <div className="left-wrapper">
                <p>
                  <b>Okul Adı :</b>
                </p>
                <p>
                  <b>Program Adı :</b>
                </p>
                <p>
                  <b>Başlangıç Bitiş Yılı :</b>
                </p>
              </div>
              <div className="right-wrapper">
                <p>{resume.schoolName}</p>
                <p>Bilgisayar Mühendisliği</p>
                <p>2017 - 2022</p>
              </div>
            </div>
            <div className="section-name">
              <h2>İş Deneyimlerim</h2>
            </div>
            <div className="resume-row">
              <div className="left-wrapper">
                <p>
                  <b>Firma Adı :</b>
                </p>
                <p>
                  <b>Çalışılan Bölüm :</b>
                </p>
                <p>
                  <b>Başlangıç Bitiş Yılı :</b>
                </p>
                <p>
                  <b>Açıklama :</b>
                </p>
              </div>
              <div className="right-wrapper">
                <p>Esetron Mekatronik</p>
                <p>Yazılım Geliştirme</p>
                <p>2017 - 2022</p>
                <p>
                  Sint in modi quasi voluptatem temporibus ab laudantium dicta,
                  iste even
                </p>
              </div>
            </div>
            <div className="section-name">
              <h2>Yetenkelerim ve Dillerim</h2>
            </div>
            <div className="resume-row">
              <div className="left-wrapper">
                <p>
                  <b>JavaScript :</b>
                </p>
                <p>
                  <b>HTML :</b>
                </p>
                <p>
                  <b>English :</b>
                </p>
                <p>
                  <b>Genel Açıklama :</b>
                </p>
              </div>
              <div className="right-wrapper">
                <p>Beginner</p>
                <p>Expert</p>
                <p>B1</p>
                <p>
                  Sint in modi quasi voluptatem temporibus ab laudantium dicta,
                  iste even
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
