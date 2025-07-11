import React from "react";
import Image from "next/image";
import GymSearchBar from "./GymSearchBar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div data-aos="fade-right">
          <h1 className="text-3xl sm:text-6xl font-bold">
            Find Your Perfect Gym. Anytime. Anywhere.
          </h1>
          <p className="mt-4 text-sm sm:text-lg font-medium">
            No more excuses. Find your gym, show up, and level up.
          </p>
          <GymSearchBar />
          <div className="text-base font-semibold text-gray-700 dark:text-gray-300 mt-6 flex items-center spaxe-x-6">
            <span>Popular Searches: </span>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-light">
              CrossFit, 24/7 Gym, Personal Trainer, Yoga, Pilates,
            </span>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="mx-auto hidden xl:block"
        >
          <Image
            src="/images/HomePageGraphic.png"
            alt="hero"
            width={900}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
