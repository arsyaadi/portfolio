import { Suspense } from "react";
import { getProjects, getUser, getWorkExperiences } from "./_lib/data";
import dynamic from "next/dynamic";
import SpinerLoading from "./_assets/icons/Spinner";

const Home = dynamic(() => import("./Home"));

export default async function Index() {
  const user = await getUser();
  const projects = await getProjects();
  const workExperiences = await getWorkExperiences();

  return (
    <div>
      <Suspense fallback={<SpinerLoading />}>
        <Home
          user={user}
          projects={projects}
          workExperiences={workExperiences}
        />
      </Suspense>
    </div>
  );
}
