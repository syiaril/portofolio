import { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | Syaril",
  description: "Browse my portfolio of software engineering projects.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
