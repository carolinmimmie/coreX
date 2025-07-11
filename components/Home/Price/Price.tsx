import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Choose Your Membership Plan"
        subHeading="Find the perfect fit for your fitness journey. Whether you're just starting out or training daily, we have a plan for you."
      />

      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay={0}
        >
          <PriceCard type="Basic" price="199" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay={100}
        >
          <PriceCard type="Standard" price="399" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay={200}
        >
          <PriceCard type="Extended" price="799" />
        </div>
      </div>
    </div>
  );
};

export default Price;
