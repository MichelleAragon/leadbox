import React from "react";
import { Image, Carousel } from "react-bootstrap";

const carouselData = [
  {
    src: "assets/img-slider-1.jpg",
    title: "First slide label",
    caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    src: "assets/img-slider-1.jpg",
    title: "Second slide label",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    src: "assets/img-slider-1.jpg",
    title: "Third slide label",
    caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
  },
];

export const HeroeCarousel = () => {
  return (
    <Carousel className="sm-6">
      {carouselData.map(({ src, title, caption }) => (
        <Carousel.Item>
          <Image className="w-100 img-slider" fluid src={src} />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
