import { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Syaril",
  description: "Learn more about Muhamad Syiaril Islami, a passionate software engineer.",
};

export default function AboutPage() {
  return <AboutClient />;
}
