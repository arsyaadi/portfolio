import {
  IconASPCore,
  IconBlazor,
  IconCosmosDB,
  IconCSharp,
  IconPinia,
  IconReactAdmin,
  IconZustand,
} from "@/app/_assets/icons";
import React from "react";
import {
  SiRedux,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiSupabase,
  SiReactquery,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiMicrosoftsqlserver,
  SiBootstrap,
  SiAzurefunctions,
} from "react-icons/si";

type StackProps = {
  [key: string]: JSX.Element;
};

const ICON_SIZE = "100%";

export const STACKS: StackProps = {
  React: <SiReact size={ICON_SIZE} className="text-sky-500" />,
  TailwindCSS: <SiTailwindcss size={ICON_SIZE} className="text-cyan-300" />,
  Redux: <SiRedux size={ICON_SIZE} className="text-purple-500" />,
  Typescript: <SiTypescript size={ICON_SIZE} className="text-blue-400" />,
  Supabase: <SiSupabase size={ICON_SIZE} className="text-green-600" />,
  "React Query": <SiReactquery size={ICON_SIZE} className="text-red-500" />,
  "Next.Js": <SiNextdotjs size={ICON_SIZE} className="text-black" />,
  Vue: <SiVuedotjs size={ICON_SIZE} className="text-green-500" />,
  "Nuxt.Js": <SiNuxtdotjs size={ICON_SIZE} className="text-green-600" />,
  "C#": <IconCSharp />,
  "SQL Server": (
    <SiMicrosoftsqlserver size={ICON_SIZE} className="text-red-500" />
  ),
  Bootstrap: <SiBootstrap size={ICON_SIZE} className="text-purple-600" />,
  "Azure Functions": (
    <SiAzurefunctions size={ICON_SIZE} className="text-blue-600" />
  ),
  "React Admin": <IconReactAdmin />,
  Zustand: <IconZustand />,
  Pinia: <IconPinia />,
  Blazor: <IconBlazor />,
  CosmosDB: <IconCosmosDB />,
  "ASP.Net Core": <IconASPCore />,
};
