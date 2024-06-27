import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TourPackage from 'src/models/TourPackage'; // Uvezi TourPackage klasu
import UserProfile from '@/models/UserProfileCard';
import TourPackageCard from "@/components/TourPackageCard";
import UserProfileCard from "@/components/UserProfileCard";
import 'src/styles/index.css';
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
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
