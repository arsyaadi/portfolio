import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export const getUser = async () => {
  try {
    const user = await prisma.user.findFirst();
    return user;
  } catch (error) {
    console.error("Failed to fetch contact", error);
  }
};

export const getWorkExperiences = async () => {
  try {
    const workExpriences = await prisma.workExperience.findMany({
      orderBy: {
        startDate: Prisma.SortOrder.desc,
      },
    });
    return workExpriences;
  } catch (error) {
    console.error("Failed to fecth work experience", error);
  }
};

export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        order: Prisma.SortOrder.asc,
      },
    });
    return projects;
  } catch (error) {
    console.error("Failde to fetch project", error);
  }
};
