import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";

const filters = ["Luxury Villa", "Self Checkin", "Free WiFi", "Pool", "Fireplace"];

const IndexPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/your-bg.jpg')] bg-cover bg-center text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="text-xl mt-4">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Pills */}
      <section className="flex flex-wrap justify-center gap-2 py-6 px-4">
        {filters.map((filter, index) => (
          <span key={index} className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-blue-200">
            {filter}
          </span>
        ))}
      </section>

      {/* Property Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-10">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-sm text-gray-500">{property.address.city}, {property.address.country}</p>
              <p className="mt-2 text-blue-600 font-bold">${property.price} / night</p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default IndexPage;
