"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Hero } from "./hero";
import { CreatedWebsites } from "./created_websites";
import { Channels } from "./channels";
import { Calendly } from "./calendly";
import { Footer } from "./footer";
import { GetStarted } from "./get_started";
import { WhyUs } from "./why-us";
import { InfiniteMovingCardsDemo } from "./ratings";

export const LandingPage = () => {
  // Data AOS Animations
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <div className="pt-32 pb-16 md:pt-52 md:pb-32 relative  min-h-screen px-4 mx-auto sm:px-6 space-y-40">
        <div className="space-y-80">
          {/* Hero */}
          <Hero />
          {/* Created Websites*/}
          <CreatedWebsites />
        </div>

        <WhyUs />
        {/* Peoples worked with*/}
        <Channels />
        {/* Calendly Booking Page*/}
        {/* <Calendly /> */}
        <GetStarted />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
