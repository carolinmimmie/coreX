import React from "react";
import Image from "next/image";
import { BiCheck } from "react-icons/bi";
const Info = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols1 lg:grid-cols-2 gap-10 items-center ">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image
            src="/images/BenefitsPageGraphic.png"
            alt="img"
            width={1000}
            height={1000}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay={150}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-8 lg:leading-16">
            Reach Your Fitness Goals With Us
          </h2>
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            Whether you are a beginner or an experienced athlete, our gym
            provides everything you need to succeed — from expert trainers to
            modern equipment and supportive community.
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-4">
              <BiCheck className="w-7 h-7 text-pink-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                State-of-the-art equipment for all training styles
              </span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <BiCheck className="w-7 h-7 text-pink-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Certified personal trainers and group classes
              </span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <BiCheck className="w-7 h-7 text-pink-600" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Flexible memberships and 24/7 access
              </span>
            </div>
          </div>
          <div className="mt-8">
            <button className="px-10 py-3 bg-blue-800 rounded-lg text-white text-center cursor-pointer hover:bg-blue-950 transition-all duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
