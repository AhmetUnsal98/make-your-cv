import { createSlice } from "@reduxjs/toolkit";
interface SkillModel {
  id: string;
  skillName: string;
  skillLevel: string;
}
interface SkillArray {
  skills: SkillModel[];
}

const initialSkillsState: SkillArray = {
  skills: [],
};
interface LanguageModel {
  id: string;
  languageName: string;
  languageLevel: string;
}
interface LanguageArray {
  languages: LanguageModel[];
}
const initialLanguagesState: LanguageArray = {
  languages: [],
};
interface ExperienceModel {
  id: string;
  companyName: string;
  jobTitle: string;
  expStartingDate: string;
  expFinishingDate: string;
  desc: string;
}
interface ExperienceArray {
  experiences: ExperienceModel[];
}
const initialExperiencesState: ExperienceArray = {
  experiences: [],
};

interface Resumes {
  id: string;
  fullName: string;
  birthDate: string;
  title: string;
  schoolName: string;
  degree: string;
  eduStartingDate: string;
  eduFinishingDate: string;
  skills: SkillArray;
  languages: LanguageArray;
  email: string;
  phone: string;
  experiences: ExperienceArray;
}
const initialResumeState: Resumes[] = [];
const initialStateRedux = {
  initialSkillsState,
  initialLanguagesState,
  initialExperiencesState,
};
const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    initialResumeState,
    initialSkillsState,
    initialLanguagesState,
    initialExperiencesState,
  },

  reducers: {
    addToDataToResume: (state, action) => {
      state.initialResumeState.push(action.payload);
    },

    addToSkills: (state, action) => {
      state.initialSkillsState.skills.push(action.payload);
    },
    removeFromSkills: (state, action) => {
      const newSkills = state.initialSkillsState.skills.filter(
        (item) => item.id !== action.payload
      );
      state.initialSkillsState.skills = newSkills;
    },
  },
});
export const { addToDataToResume, addToSkills } = resumeSlice.actions;
export default resumeSlice.reducer;
