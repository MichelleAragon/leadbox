import React from "react";
import { Image, Carousel } from "react-bootstrap";

const carouselImages = [
  "assets/img-slider-1.png", "assets/img-slider-1.png", "assets/img-slider-1.png",
]

export const HeroeCarousel = () => {
  return (
    <Carousel className="sm-6">
      {carouselImages.map((src) => (
        <Carousel.Item>
          <Image className="w-100 vh-100 img-slider" fluid src={src} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
