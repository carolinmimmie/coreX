import React from "react";
import { BiCheck } from "react-icons/bi";

type Props = {
  type: string;
  price: string;
};

const PriceCard = ({ type, price }: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-10 rounded-lg relative">
      {type === "Standard" && (
        <div className="absolute top-7 right-7 px-6 py-1.5 bg-green-800 text-white rounded-full text-xs">
          Recommended
        </div>
      )}

      <h2 className="mt-6 text-xl font-bold text-blue-900 dark:text-blue.200">
        {type}
      </h2>
      <div className="mt-3">
        <span className="text-4xl font-bold text-blue-950 dark:text-white">
          ${price} <span> / Monthly</span>
        </span>
      </div>
      <div className="mt-12 ">
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            Unlimited gym access
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            Free group training sessions
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            Personal training intro session
          </span>
        </div>
        <div className="flex items-center mb-6 space-x-1">
          <BiCheck className="w-7 h-7" />
          <span className="text-gray-700 dark:text-gray-300">
            Access to all gym locations
          </span>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button className="w-full py-3 bg-blue-900/15 dark:bg-gray-100 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-200 cursor-pointer">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
