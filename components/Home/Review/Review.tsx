"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Member Testimonials"
        subHeading="Hear what real people say about their experience with our gyms"
      />
      <div className="w=[80%] mx-auto mt-16">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ReviewCard
            image="/images/profile1.jpg"
            title="Motivating & Professional!"
            userName="Emily R"
            userRole="Member at Pulse Fitness, Stockholm"
            review="The trainers are so supportive and truly know how to push you in the right way. I've never felt more motivated to stick to my fitness goals!"
          />

          <ReviewCard
            image="/images/profile2.jpg"
            title="Clean and Spacious!"
            userName="Robert T"
            userRole="Morning Member, Helsingborg"
            review="I love starting my day here — the gym is always spotless and never too crowded. Everything is well organized and accessible."
          />

          <ReviewCard
            image="/images/profile3.jpg"
            title="Friendly Staff!"
            userName="Sofia A"
            userRole="Group Class Attendee, Västerås"
            review="The staff always greets you with a smile and make you feel welcome. The group classes are fun, effective, and energizing."
          />

          <ReviewCard
            image="/images/profile4.jpg"
            title="Flexible Membership!"
            userName="Ali N"
            userRole="Student Plan Member, Lund"
            review="As a student, I appreciate the flexible and affordable membership options. It fits perfectly with my schedule and budget!"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
