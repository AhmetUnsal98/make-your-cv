import { createSlice } from "@reduxjs/toolkit";
import { SkillArray } from "../lib/SkillModel";
import { ExperienceArray } from "../lib/ExperienceModel";
import { LanguageArray } from "../lib/LanguageModel";
import { Resumes } from "../lib/ResumeModel";
const initialSkillsState: SkillArray = {
  skills: [],
};
const initialLanguagesState: LanguageArray = {
  languages: [],
};
const initialExperiencesState: ExperienceArray = {
  experiences: [],
};
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
export const { addToDataToResume, addToSkills, removeFromSkills } =
  resumeSlice.actions;
export default resumeSlice.reducer;
