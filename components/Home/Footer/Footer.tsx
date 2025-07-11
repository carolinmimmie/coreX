import React from "react";
import { LuDumbbell } from "react-icons/lu";

export const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-200 dark:bg-gray-900">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start">
        <div className="xl:col-span-2">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col">
              <LuDumbbell className="w-5 h-5 text-white dark:text-black" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-cyan-800  dark:text-white font-bold">
              CoreX
            </h1>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Your health and fitness journey starts here. Join us to unlock your
            full potential with expert guidance and a welcoming community.
          </p>
          <div className="mt-5">
            <h3 className="lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium">
              Call us
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold">
              +46 8 123 456 78
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            CoreX Headquarters
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Storgatan 12, 111 22 Stockholm, Sweden
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            contact@CoreX.se
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Quick Links
          </h3>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Membership Plans
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Group Classes
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Personal Training
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Nutrion
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Contact Us
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Quick Links
          </h3>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Membership Plans
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Group Classes
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Personal Training
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Nutrion
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Contact Us
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            About Us
          </h3>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Our Story
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Mission & Vision
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Team
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Careers
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Press & Media
          </p>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Helpful Resources
          </h3>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Blog
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Tutorials
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            FAQs
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Support Center
          </p>
          <p className="footer__link cursor-pointer hover:text-blue-600">
            Contact Support
          </p>
        </div>
      </div>
      <div className="pt-6 mt-10 border-top w-[90%] mx-auto border-gray-300 dark:border-gray-800">
        <p className="text-gray-500 text-sm">
          © 2025 CoreX. All rights reserved.
        </p>
      </div>
    </div>
  );
};
