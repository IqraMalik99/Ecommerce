"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const Categories = () => {
  const router = useRouter();
  const handleSearch = (data: string) => {
    router.push(`/${data}`)
    console.log(data);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-[rgb(249 243 237)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        
        {/* Left column: Makeup */}
        <div
          className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl 
                     h-[55vh] sm:h-[65vh] md:h-[80vh] min-h-[280px]"
          onClick={() => handleSearch("makeup")}
        >
          <Image
            src="/images/makeup.jpg"
            alt="Makeup"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold">Makeup</h3>
            <p className="mt-1 opacity-0 transition-opacity duration-300 hover:opacity-100">
              Explore collection
            </p>
          </div>
        </div>

        {/* Right column: Skin Care + Electronics */}
        <div className="flex flex-col gap-6 h-[55vh] sm:h-[65vh] md:h-[80vh] min-h-[280px]">
          {/* Skin Care */}
          <div
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl flex-1"
            onClick={() => handleSearch("skincare")}
          >
            <Image
              src="/images/skincare.jpg"
              alt="Skin Care"
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Skin Care</h3>
              <p className="mt-1 opacity-0 transition-opacity duration-300 hover:opacity-100">
                Explore collection
              </p>
            </div>
          </div>

          {/* Electronics */}
          <div
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl flex-1"
            onClick={() => handleSearch("electronic")}
          >
            <Image
              src="/images/electronic.jpg"
              alt="Electronics"
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Electronics</h3>
              <p className="mt-1 opacity-0 transition-opacity duration-300 hover:opacity-100">
                Explore collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
