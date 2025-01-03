import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import HeroCarousel from "../animations/HeroCarousel";
import { motion } from "framer-motion";

const Hero = () => {
  const images = [assets.hero_img, assets.hero_img2];

  return (
    <div className="w-full h-fit pt-1 sm:pt-5">
      <div className="flex flex-col-reverse sm:flex-row border border-gray-400">
        {/* Hero Left Side */}
        <div className="w-full sm:w-1/2 sm:h-[550px] h-[330px] relative">
        <HeroCarousel images={images} duration={3000}/>  
        </div>

        {/* Hero Right Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div>
            <div className="flex items-center gap-2 hover:translate-x-[-5px] ease-in-out duration-500 cursor-pointer">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="w-8 md:w-11 h-[2px] bg-herotext2"></p>
              <a href="#bestseller">
                <p className="font-medium text-sm md:text-base text-herotext2">
                  OUR BESTSELLERS
                </p>
              </a>
              </motion.div>
            </div>

            <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-herotext">
              Latest Arrivals
            </h1>
            
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            <Link to="/collection">
              <div className="flex items-center gap-2 hover:translate-x-[5px] ease-in-out duration-500">
                <p className="font-medium text-sm md:text-base text-herotext2">
                  SHOP NOW
                </p>
                <p className="w-8 md:w-11 h-[2px] bg-herotext2"></p>
              </div>
            </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
