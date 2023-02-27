import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { uid } from "uid";
interface ResumeModel {
  id: string;
  fullName: string;
  birthDate: string;
  title: string;
  schoolName: string;
  degree: string;
  eduStartDate: string;
  eduFinishDate: string;
  skills: [];
  languages: [];
  email: string;
  phone: string;
  experiences: [];
}

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
    email: "",
    phone: "",
    experiences: [],
  });
  useEffect(() => {
    for (var i = 0; i < resume.length; i++) {
      if (resume[i].id === id) {
        setCurrentResume(resume[i]);
      }
    }
  }, []);

  return (
    <div>
      {currentResume.id}
      {currentResume.fullName}
      {currentResume.birthDate}
      {currentResume.title}
      {currentResume.email}
      {currentResume.phone}
    </div>
  );
};
