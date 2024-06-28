import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Roam Rise",
  description: "Najbolja turisticka agencija",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
    
      <Breadcrumb
        pageName="O nama"
        description="Ako zelite putovanje za pamcenje, na pravom ste mestu!"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
