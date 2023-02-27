export interface Resume {
  Name: string;
  BirthDate: string;
  Title: string;
  SchoolName: string;
  Degree: string;
  EduStartDate: string;
  EduFinishDate: string;
  Email: string;
  Phone: string;
  Skills: Skills;
  Experiences: Experiences;
}
export interface Experiences {
  experiences: Experience[];
}
export interface Experience {
  id: string;
  companyName: string;
  jobTitle: string;
  startingDate: string;
  finishingDate: string;
  desc: string;
}
export interface Skills {
  skills: Skill[];
}

export interface Skill {
  id: string;
  skillName: string;
  skillLevel: string;
}
