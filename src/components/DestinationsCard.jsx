import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const DestinationCard = ({ destination }) => {
  const {
    _id,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
  } = destination;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      
      {/* Image */}
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        
        {/* Country */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <LuMapPin className="text-cyan-600" />
          <span>{country}</span>
        </div>

        {/* Title + Price */}
        <div className="flex justify-between items-start gap-3">
          <h2 className="text-xl font-bold text-gray-800 leading-tight">
            {destinationName}
          </h2>

          <div className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full font-bold whitespace-nowrap">
            ${price}
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaRegCalendar className="text-cyan-600" />
          <span>{duration}</span>
        </div>

        {/* Button */}
        <Link href={`/destinations/${_id}`} className="block pt-2">
          <Button
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl"
          >
            Book Now
            <FiArrowUpRight size={18} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;