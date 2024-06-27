"use client";

import { ThemeProvider } from "next-themes";
import TourPackage from 'src/models/TourPackage'; // Uvezi TourPackage klasu
import UserProfile from '@/models/UserProfileCard';
import TourPackageCard from "@/components/TourPackageCard";
import UserProfileCard from "@/components/UserProfileCard";
const europeTour = new TourPackage(
  1,
  "European Adventure",
  "Explore the best of Europe in 10 days.",
  2500,
  10,
  ["Paris", "Rome", "Berlin"],
  "https://example.com/europe-tour.jpg"
);

const user = new UserProfile(
  1,
  "John Doe",
  "john.doe@example.com",
  "123-456-7890"
);

user.addBooking(europeTour);
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
      <div className="App">
      <h1>Tourist Agency</h1>
      <h2>Tour Packages</h2>
      <TourPackageCard tourPackage={europeTour} />
      <h2>User Profile</h2>
      <UserProfileCard user={user} />
    </div>
    </ThemeProvider>
  );
}
