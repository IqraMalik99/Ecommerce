"use client"
import React from "react";
import Image from "next/image";

export const Categories = () => {
  const handleSearch=(data:string)=>{
    console.log(data);
  }
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"> {/* Reduced max-width */}
        
        {/* Left column: Women */}
        <div 
          className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl h-[80vh] min-h-[400px]"
          onClick={() => handleSearch("women")}
        >
          <Image
            src="/images/cloth2.jpg"
            alt="Women"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold">Women</h3>
            <p className="mt-1 opacity-0 transition-opacity duration-300 hover:opacity-100">
              Explore collection
            </p>
          </div>
        </div>

        {/* Right column: Men + Jewelry stacked */}
        <div className="flex flex-col gap-6 h-[80vh] min-h-[400px]">
          <div 
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl flex-1"
            onClick={() => handleSearch("men")}
          >
            <Image
              src="/images/men1.jpg"
              alt="Men"
              className="w-full h-full object-cover"
              fill 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Men</h3>
              <p className="mt-1 opacity-0 transition-opacity duration-300 hover:opacity-100">
                Explore collection
              </p>
            </div>
          </div>
          
          <div 
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl flex-1"
            onClick={() => handleSearch("jewellery")}
          >
            <Image
              src="/images/jewel5.jpg"
              alt="Jewelry"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Jewelry</h3>
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
