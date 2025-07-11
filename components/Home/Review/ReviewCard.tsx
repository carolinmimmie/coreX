import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  userName: string;
  userRole: string;
  review: string;
};

const ReviewCard = ({ image, title, userName, userRole, review }: Props) => {
  return (
    <div className="w-full lg:w-[60%] mx-auto">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto rounded-full"
      />
      <h2 className="mt-4 text-lg font-bold text-blue-600 dark:text-white text-center">
        {title}
      </h2>
      <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
        {review}
      </p>
      <div className="mt-8 text-center ">
        <h2 className="text-xl font-semibold text-gray-700 dark_text-gray-200">
          {userName}
        </h2>
        <p className="text-gray-600 text-sm mt-2 dark:text-gray-400">
          {userRole}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
