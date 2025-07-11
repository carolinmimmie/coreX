import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import MemberShipCard from "./MemberShipCard";
const membershipData = [
  {
    id: 1,
    name: "Basic",
    price: "$19/month",
    yearlyPrice: "$199/year",
    image: "/images/basic.png",
    level: "Beginner",
    tagline: "Great for starting out with gym training.",
  },
  {
    id: 2,
    name: "Standard",
    price: "$29/month",
    yearlyPrice: "$299/year",
    image: "/images/standard.png",
    level: "Intermediate",
    tagline: "Perfect for regular fitness routines.",
  },
  {
    id: 3,
    name: "Premium",
    price: "$39/month",
    yearlyPrice: "$399/year",
    image: "/images/pro.png",
    level: "Advanced",
    tagline: "Unlimited access & premium features.",
  },
  {
    id: 4,
    name: "Student Plan",
    price: "$15/month",
    yearlyPrice: "$149/year",
    image: "/images/student.png",
    level: "Beginner",
    tagline: "Budget-friendly for students.",
  },
  {
    id: 5,
    name: "Family Plan",
    price: "$59/month",
    yearlyPrice: "$599/year",
    image: "/images/family.png",
    level: "All Levels",
    tagline: "Train together with your family.",
  },
  {
    id: 6,
    name: "Weekend Warrior",
    price: "$12/month",
    yearlyPrice: "$119/year",
    image: "/images/weekend.png",
    level: "Casual",
    tagline: "Ideal for weekend-only access.",
  },
  {
    id: 7,
    name: "Pro Athlete",
    price: "$79/month",
    yearlyPrice: "$799/year",
    image: "/images/pro.png",
    level: "Elite",
    tagline: "Tailored for serious athletes.",
  },
  {
    id: 8,
    name: "Corporate Membership",
    price: "$99/month",
    yearlyPrice: "$999/year",
    image: "/images/corporate.png",
    level: "All Levels",
    tagline: "Perfect for teams & office workers.",
  },
  {
    id: 9,
    name: "Wellness Plus",
    price: "$45/month",
    yearlyPrice: "$449/year",
    image: "/images/wellness.png",
    level: "All Levels",
    tagline: "For those who value both fitness and recovery.",
  },
];

const MemberShip = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Choose Your Membership"
        subHeading="Flexible plans for every fitness journey"
      />
      <div className="w-[95%] sm:w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
        {membershipData.map((membership, index) => {
          return (
            <div
              key={membership.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={index * 100}
            >
              <MemberShipCard membership={membership} />
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <button className="px-10 py-4 bg-blue-700 text-white cursor-pointer rounded-lg hover:bg-blue-800 transition-all duration-200">
          Load More Listing
        </button>
      </div>
    </div>
  );
};

export default MemberShip;
