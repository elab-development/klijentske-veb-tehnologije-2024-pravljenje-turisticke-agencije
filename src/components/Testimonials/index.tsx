import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import TourPackage from 'src/models/TourPackage'; // Uvezi TourPackage klasu
import UserProfile from '@/models/UserProfileCard';
import TourPackageCard from "@/components/TourPackageCard";
import UserProfileCard from "@/components/UserProfileCard";
<<<<<<< HEAD
import Reviews from "../Reviews";
import React, { useState } from 'react';
=======

>>>>>>> d7750eddf78dbe95587338c41679a998cf492b56

const user1 = new UserProfile(
  1,
  "Petar Mitrovic",
  "petar.mitrovic@gmail.com",
  "123-456-7890"
);
const user2 = new UserProfile(
  1,
  "David Simovic",
  "david.simovic@gmail.com",
  "123-444-7890"
);
const user3 = new UserProfile(
  1,
  "Zoran Jovanovic",
  "zoran.jovanovic@gmail.com",
  "123-456-7000"
);

const europeTour = new TourPackage(
  1,
  "Prelepa Evropa",
  "Explore the best of Europe in 10 days.",
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
user1.addBooking(europeTour);
user2.addBooking(mediterraneanTour);
user3.addBooking(alpineTour);

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Petar Mitrovic",
    designation: "",
    content:
      "Za svaku pohvalu ispostovani svi uslovi iz naseg aranzmana.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "David Simovic",
    designation: "",
    content:
      "Cela moja porodica je prezadovoljna uslugama.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Zoran Jovanovic",
    designation: "",
    content:
      "Ipostovana usluga mada smo imali malih problema sa letom ali idalje je za svaku pohvalu i preporuku.",
    image: "/images/testimonials/auth-03.png",
    star: 4,
  },
];
const user = new UserProfile(
  1,
  "John Doe",
  "john.doe@example.com",
  "123-456-7890"
);
const Testimonials = () => {
  return (
    
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Sta nasi klijenti kazu"
          paragraph="Ovo je samo deo od nasih zadovoljnih klijenata"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="App" style={{ display: 'flex', gap: '120px' }}>
  <UserProfileCard user={user1} />
  <UserProfileCard user={user2} />
  <UserProfileCard user={user3} />
<<<<<<< HEAD

</div>

      </div>
  
=======
</div>

      </div>
      
>>>>>>> d7750eddf78dbe95587338c41679a998cf492b56
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
