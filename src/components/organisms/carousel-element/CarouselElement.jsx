import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const CarouselElement = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="carousel" ref={emblaRef}>
      {/* <div class="carousel__viewport"> */}

      <div className="carousel__container">
        <div className="carousel__slide">Slide 1</div>
        <div className="carousel__slide">Slide 2</div>
        <div className="carousel__slide">Slide 3</div>
      </div>
      {/* </div> */}
      <button class="carousel__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button class="carousel__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};

export default CarouselElement;
