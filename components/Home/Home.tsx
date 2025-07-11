"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Category from "./Category/category";
import MemberShip from "./MemberShip/MemberShip";
import PopularGyms from "./PopularGyms/PopularGyms";
import Info from "./Info/Info";
import Price from "./Price/Price";
import Review from "./Review/Review";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "bottom-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Category />
      <MemberShip />
      <PopularGyms />
      <Info />
      <Price />
      <Review />
    </div>
  );
};

export default Home;
