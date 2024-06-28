// src/components/Hero.tsx
"use client";
import React, { useState } from 'react';
import Button from './button'; 
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import TravelBooking from '../TravelBooking';
import 'src/styles/TravelBooking.css';
<<<<<<< HEAD
import Reviews from '../Reviews';
=======
>>>>>>> d7750eddf78dbe95587338c41679a998cf492b56
const Hero = () => {
  const [destination, setDestination] = useState('Arab Egypt');
  const [checkIn, setCheckIn] = useState([null, null]);
  const [priceRange, setPriceRange] = useState('');

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setCheckIn([start, end]);
  };

  // Kreiranje instanci TourPackage i UserProfile
  

  return (
    <>
    
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-cover bg-center pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ backgroundImage: "url(/images/video/turska.jpeg)" }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight bg-yellow-300 p-4 rounded-md">
                  Dobro došli!
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Istrazujte najlepsa mesta na svetu sa Roam Rise-om!
                </p>
<<<<<<< HEAD
              
       
=======
                <Section>
                 
                </Section>
>>>>>>> d7750eddf78dbe95587338c41679a998cf492b56
                {/* Prikaz TourPackage i UserProfile informacija */}
              
              </div>
            </div>
          </div>
          
        </div>
        <TravelBooking destination="Rome" />
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1546"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="116.034"
                y1="215.034"
                x2="231.986"
                y2="366.156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

const Section = styled.section`
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
    padding: 20px;
    border-radius: 10px;
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 15px;
    color: white; /* White text color */
  }

  label {
    margin-bottom: 5px;
  }

  select, input, .react-datepicker-wrapper {
    background: black; /* Black background */
    color: white; /* White text */
    border: 2px solid white;
    border-radius: 5px;
    padding: 5px 10px;
  }

  button {
    background: blue; /* Blue background */
    color: white; /* White text */
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background: darkblue; /* Darker blue on hover */
  }
`;

export default Hero;
