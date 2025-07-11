"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PopularGymCard from "./PopularGymCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const PopularGymData = [
  {
    id: 1,
    image: "/images/Arrow.png",
    name: "Iron Pulse Club",
    location: "Stockholm, Sweden",
    position: "Centralstationen · 12 gyms",
  },
  {
    id: 2,
    image: "/images/AbstractWaves.png",
    name: "CoreX Gym",
    location: "Göteborg, Sweden",
    position: "Avenyn · 9 gyms",
  },
  {
    id: 3,
    image: "/images/titan.png",
    name: "TitanFit",
    location: "Malmö, Sweden",
    position: "Triangeln · 6 gyms",
  },
  {
    id: 4,
    image: "/images/flex.png",
    name: "FlexZone",
    location: "Örebro, Sweden",
    position: "Västhaga · 3 gyms",
  },
  {
    id: 5,
    image: "/images/power.png",
    name: "Athletica X",
    location: "Uppsala, Sweden",
    position: "Centralbadet · 4 gyms",
  },
  {
    id: 6,
    image: "/images/Sparkles.png",
    name: "PowerNest",
    location: "Stockholm, Sweden",
    position: "Södermalm · 8 gyms",
  },
];

const PopularGyms = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Find Your Next Gym"
        subHeading="Trusted and loved by thousands of members"
      />
      <div className="w=[80%] mx-auto mt-16">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {PopularGymData.map((gymData) => {
            return <PopularGymCard key={gymData.id} gymData={gymData} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularGyms;
