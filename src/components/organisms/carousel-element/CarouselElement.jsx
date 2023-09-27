import React, { Fragment } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const CarouselElement = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="carousel" ref={emblaRef}>
      <div className="carousel__container">
        <div className="carousel__slide">Slide 1</div>
        <div className="carousel__slide">Slide 2</div>
        <div className="carousel__slide">Slide 3</div>
      </div>
    </div>
  );
};

export default CarouselElement;
