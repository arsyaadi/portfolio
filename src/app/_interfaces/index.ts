export interface IUser {
  id: string;
  name: string;
  description: string;
  aboutMe: string;
  imageUrl: string;
  stacks: string[];
  email: string;
  resumeUrl: string;
  workExperiences: IWorkExperience[];
  projects: IProject[];
}

export interface IWorkExperience {
  id: string;
  user: IUser;
  userId: string;
  companyName: string;
  position: string;
  description: string[];
  url: string;
  startDate: Date;
  endDate?: Date | null;
}

export interface IProject {
  id: string;
  user: IUser;
  userId: string;
  name: string;
  description: string;
  imageUrl: string;
  url?: string;
  techStack: string[];
  projectType: ProjectType;
}

enum ProjectType {
  TYPE1 = "Type 1",
  TYPE2 = "Type 2",
}
