import { IUser } from "@/app/_interfaces";
import dynamic from "next/dynamic";

const ClientWrapperAbout = dynamic(() => import("./About"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ClientAbout = ({ user }: { user: IUser }) => {
  return <ClientWrapperAbout user={user} />;
};

export default ClientAbout;
