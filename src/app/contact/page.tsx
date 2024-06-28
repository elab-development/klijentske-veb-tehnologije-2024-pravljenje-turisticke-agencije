import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt Page | Roam Rise",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kontakt"
        description="Imate pitanja? Želite da rezervišete svoje sledeće putovanje iz snova? Naš tim je ovde da vam pomogne! Slobodno nas kontaktirajte putem bilo kog od sledećih kanala i rado ćemo vam pružiti sve potrebne informacije."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
