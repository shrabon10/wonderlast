import Image from "next/image";
import {
  LuMapPin,
  LuCalendarDays,
  LuPlane,
  LuShield,
  LuCheck,
} from "react-icons/lu";

const DestinationsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    cache: "no-store",
  });

  const destination = await res.json();

  const {
    destinationName,
    country,
    imageUrl,
    price,
    duration,
    departureDate,
    description,
  } = destination;

  const highlights = [
    "Luxury accommodation",
    "Airport transfer included",
    "Professional tour guide",
    "Travel insurance included",
    "Local cultural experience",
    "24/7 customer support",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 py-10">
        {/* Hero Section */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={destinationName}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-10 left-10 text-white">
            <div className="flex items-center gap-2 text-lg">
              <LuMapPin />
              <span>{country}</span>
            </div>

            <h1 className="text-5xl font-bold mt-3">
              {destinationName}
            </h1>

            <div className="flex gap-6 mt-4 text-lg">
              <div className="flex items-center gap-2">
                <LuCalendarDays />
                {duration}
              </div>

              <div className="font-semibold">
                From ${price}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-5 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500">Destination</p>
            <h3 className="text-xl font-bold mt-2">
              {country}
            </h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500">Duration</p>
            <h3 className="text-xl font-bold mt-2">
              {duration}
            </h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500">Departure</p>
            <h3 className="text-xl font-bold mt-2">
              {departureDate}
            </h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500">Starting From</p>
            <h3 className="text-xl font-bold mt-2 text-cyan-600">
              ${price}
            </h3>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mt-10">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-3xl font-bold mb-5">
                Overview
              </h2>

              <p className="text-gray-600 leading-8">
                {description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-3xl font-bold mb-6">
                Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <LuCheck className="text-green-500 text-xl" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Info */}
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-3xl font-bold mb-6">
                What Included
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <LuPlane className="text-cyan-600 text-xl" />
                  Round trip transportation
                </div>

                <div className="flex items-center gap-3">
                  <LuShield className="text-cyan-600 text-xl" />
                  Travel insurance coverage
                </div>

                <div className="flex items-center gap-3">
                  <LuCheck className="text-cyan-600 text-xl" />
                  Premium accommodation
                </div>

                <div className="flex items-center gap-3">
                  <LuCheck className="text-cyan-600 text-xl" />
                  Guided sightseeing tours
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div>
            <div className="sticky top-24 bg-white rounded-3xl p-8 shadow-lg border">
              <p className="text-gray-500">
                Starting From
              </p>

              <h2 className="text-5xl font-bold text-cyan-600 mt-2">
                ${price}
              </h2>

              <p className="text-sm text-gray-500">
                per person
              </p>

              <div className="mt-6">
                <label className="text-sm text-gray-500">
                  Departure Date
                </label>

                <div className="mt-2 border rounded-xl p-4">
                  {departureDate}
                </div>
              </div>

              <button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-xl font-semibold transition">
                Book Now
              </button>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <LuCheck className="text-green-500" />
                  Free cancellation
                </div>

                <div className="flex items-center gap-2">
                  <LuCheck className="text-green-500" />
                  Travel insurance included
                </div>

                <div className="flex items-center gap-2">
                  <LuCheck className="text-green-500" />
                  24/7 customer support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsDetailsPage;