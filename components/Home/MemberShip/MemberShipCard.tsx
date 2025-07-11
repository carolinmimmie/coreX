import { BsBookmark } from "react-icons/bs";
import Image from "next/image";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";

type Props = {
  membership: {
    id: number;
    name: string;
    price: string;
    yearlyPrice: string;
    image: string;
    level: string;
    tagline: string;
  };
};

const MemberShipCard = ({ membership }: Props) => {
  return (
    <div className="border-[1.5px] border-gray-300 dark:border-gray-700 p-6 rounded-lg relativ">
      <div className="w-7 h-7 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-800 flex items-center transition-all duration-200 justify-center rounded-full flex-col absolute top-4 right-4">
        <BsBookmark className="w-3 h-3" />
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src={membership.image}
          alt={membership.name}
          width={50}
          height={50}
        />
        <div>
          <h2 className="text-base font-medium">{membership.name}</h2>
          <div className="flex items-center space-x-6 mt-3">
            <div className="flex items-center space-x-1 text-gray-500">
              <GiWeightLiftingUp className="w-5 h-5" />
              <p className="text-sm">Plan</p>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <FaUserFriends className="w-5 h-5" />
              <p className="text-sm">{membership.level}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-3">
        <div className="px-4 py-1 bg-blue-600/30 dark:bg-blue-950/30 rounded-full text-xs text-blue-700 dark:text-blue-300">
          {membership.price}
        </div>
        <div className="px-4 py-1 rounded-full text-xs bg-green-600/20 text-green-700 dark:text-green-300">
          {membership.yearlyPrice}
        </div>
      </div>
    </div>
  );
};

export default MemberShipCard;
