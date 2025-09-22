import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number, e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setCurrentIndex(slideIndex);
  };

  if (!images || images.length === 0) {
    return (
        <div className="w-full h-64 bg-[#1A1A1A] flex items-center justify-center">
            <span className="text-[#BDBDBD]">Image not available</span>
        </div>
    );
  }


  return (
    <div className="relative w-full h-64 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.5)] bg-[#0D0D0D]">
        <img
            key={currentIndex}
            src={images[currentIndex]}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover"
        />

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            aria-label="Previous image"
            className="absolute top-1/2 -translate-y-1/2 start-2 bg-[rgba(0,0,0,0.6)] text-[#FFC107] text-3xl p-0 px-2 rounded-md transition-colors duration-300 hover:bg-[#FFC107] hover:text-[#0D0D0D] z-10 opacity-0 group-hover:opacity-100"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            aria-label="Next image"
            className="absolute top-1/2 -translate-y-1/2 end-2 bg-[rgba(0,0,0,0.6)] text-[#FFC107] text-3xl p-0 px-2 rounded-md transition-colors duration-300 hover:bg-[#FFC107] hover:text-[#0D0D0D] z-10 opacity-0 group-hover:opacity-100"
          >
            &#10095;
          </button>
          <div className="absolute bottom-2 w-full flex justify-center space-i-2 z-10">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={(e) => goToSlide(index, e)}
                className={`block w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === index ? 'bg-[#FFC107]' : 'bg-[rgba(255,193,7,0.5)]'}`}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;