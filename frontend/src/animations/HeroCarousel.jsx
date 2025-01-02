import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroCarousel = ({ images, duration = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, duration);

    return () => clearInterval(interval);
  }, [images.length, duration]);

  const slideVariants = {
    enter: { x: "100%" }, // Start from right (hidden)
    center: { x: 0 }, // Center position (visible)
    exit: { x: "-100%" }, // Exit to left (hidden)
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        {images.map((image, index) =>
          index === currentImageIndex ? (
            <motion.img
              key={index}
              src={image}
              alt={`Carousel Image ${index}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;
