import { Metadata } from "next";
import { SkillsClient } from "./SkillsClient";

export const metadata: Metadata = {
  title: "Skills | Syaril",
  description: "Technical skills and expertise.",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
