import React from "react";
import {
  GiWeightLiftingUp,
  GiRunningShoe,
  GiJumpingRope,
  GiPerson,
  GiAppleCore,
} from "react-icons/gi";
import { MdFitnessCenter, MdSelfImprovement } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import SectionHeading from "@/components/Helper/SectionHeading";
import CategoryCard from "./CategoryCard";

const categoryData = [
  {
    id: 1,
    categoryName: "Strength Training",
    gymsCount: 18,
    icon: (
      <GiWeightLiftingUp className="w-10 h-10 text-blue-700 dark:text-white" />
    ),
  },
  {
    id: 2,
    categoryName: "Yoga & Stretching",
    gymsCount: 12,
    icon: (
      <MdSelfImprovement className="w-10 h-10 text-blue-700 dark:text-white" />
    ),
  },
  {
    id: 3,
    categoryName: "Cardio",
    gymsCount: 15,
    icon: <GiRunningShoe className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 4,
    categoryName: "HIIT & CrossFit",
    gymsCount: 9,
    icon: <GiJumpingRope className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 5,
    categoryName: "Personal Training",
    gymsCount: 7,
    icon: <GiPerson className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 6,
    categoryName: "Group Classes",
    gymsCount: 10,
    icon: (
      <MdFitnessCenter className="w-10 h-10 text-blue-700 dark:text-white" />
    ),
  },
  {
    id: 7,
    categoryName: "Free Weights",
    gymsCount: 14,
    icon: <FaDumbbell className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
  {
    id: 8,
    categoryName: "Nutrition & Supplements",
    gymsCount: 11,
    icon: <GiAppleCore className="w-10 h-10 text-blue-700 dark:text-white" />,
  },
];

const Category = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Top Gym Categories"
        subHeading="Join thousands training across 2,000+ gyms in Sweden"
      />
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryData.map((category, index) => {
          return (
            <div
              key={category.id}
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={index * 100}
            >
              <CategoryCard category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
