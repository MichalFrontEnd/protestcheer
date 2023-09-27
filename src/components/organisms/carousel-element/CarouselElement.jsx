import React, { Fragment } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const CarouselElement = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <Fragment className="carousel">
      <div className="carousel-container container">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">Slide 1</div>
            <div className="embla__slide">Slide 2</div>
            <div className="embla__slide">Slide 3</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CarouselElement;
