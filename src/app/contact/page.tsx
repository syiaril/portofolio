import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Syiaril",
  description: "Get in touch with Muhamad Syiaril Islami.",
};

export default function ContactPage() {
  return <ContactClient />;
}
