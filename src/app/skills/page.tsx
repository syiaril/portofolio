import { Metadata } from "next";
import { SkillsClient } from "./SkillsClient";

export const metadata: Metadata = {
  title: "Skills | Syiaril",
  description: "Technical skills and expertise.",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
