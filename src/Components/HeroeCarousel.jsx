import React from "react";
import { Image, Carousel } from "react-bootstrap";

const carouselImages = [
  {src: "assets/img-slider-1.png", id: 1},
  {src: "assets/img-slider-1.png", id: 2},
  {src: "assets/img-slider-1.png", id: 3},
];

export const HeroeCarousel = () => {
  return (
    <Carousel className="sm-6">
      {carouselImages.map(({src, id}) => (
        <Carousel.Item key={id}>
          <Image className="w-100 vh-100 img-slider" fluid src={src} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
