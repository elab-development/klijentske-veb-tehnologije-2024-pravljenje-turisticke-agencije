"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";
import TourPackage from 'src/models/TourPackage'; // Uvezi TourPackage klasu
import UserProfile from '@/models/UserProfileCard';
import TourPackageCard from "@/components/TourPackageCard";
import UserProfileCard from "@/components/UserProfileCard";
import Offers from "../Offers";
import ArrangementList from "../ArrangementList";
const Video = () => {
  const [isOpen, setOpen] = useState(false);
  const europeTour = new TourPackage(
    1,
    "European Adventure",
     "Prelepa Evropa.",
    2500,
    10,
    ["Paris", "Rome", "Berlin"],
    "images/blog/OIP.jfif",
    
  );
  const mediterraneanTour  = new TourPackage(
    2,
    "Mediterranean Magic",
    "Discover the beauty of the Mediterranean in 7 days.",
    1800,
    7,
    ["Barcelona", "Athens", "Venice"],
    "images/blog/med.jpg",
    
  );
  const alpineTour   = new TourPackage(
    3,
    "Alpine Adventure",
    "Experience the Alps in Switzerland and Austria.",
    3000,
    14,
    ["Zurich", "Innsbruck", "Geneva"],
    "images/blog/alp.jfif",
    
  );

  const user = new UserProfile(
    1,
    "Pera Peric",
    "john.doe@example.com",
    "123-456-7890"
  );

  user.addBooking(europeTour);
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
      <SectionTitle
          title="Pogledajte dostupna putovanja"
          paragraph=""
          center
          mb="80px"
        />
        <ArrangementList></ArrangementList>
        <br></br><br></br><br></br>
        <SectionTitle
          title="Tasos"
          paragraph="Pogledajte lepotu tasosa."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/r2.jfif" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                <a
  href="https://www.youtube.com/watch?v=k-nSHhkceqI" 
  aria-label="video play button"
  className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
  target="_blank" 
  rel="noopener noreferrer" 
>
  <svg
    width="16"
    height="18"
    viewBox="0 0 16 18"
    className="fill-current"
  >
        
    <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
  </svg>
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
 <div className="App">
 
      <TourPackageCard tourPackage={europeTour} />
      <TourPackageCard tourPackage={mediterraneanTour} />
      <TourPackageCard tourPackage={alpineTour} />

   
    </div>

    <div className="tour-package-info">
                  <h2>Tour Package:</h2>
                  <p>{europeTour.getSummary()}</p>
                  <p>{europeTour.getDetails()}</p>
                  <p>{mediterraneanTour.getSummary()}</p>
                  <p>{mediterraneanTour.getDetails()}</p>
                  <p>{alpineTour.getSummary()}</p>
                  <p>{alpineTour.getDetails()}</p>
                </div>
                <Offers /> 
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
