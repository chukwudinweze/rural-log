"use client";

// Import external dependencies
// @ts-ignore
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// import internal dependencies
import SplideItem from "./SplideItem";

const slideImages = [
  {
    text: "Your Last Destination for Quality Agricultural Products",
    imageUrl: "/images/test1.jpg",
  },
  {
    text: "Get your Products Delivered Right to Your Doorstep",
    imageUrl: "/images/pexels-michael-burrows-7125426.jpg",
  },
  {
    text: "Always Fresh, Direct from the Farm to Your Home",
    imageUrl: "/images/fresh-product.jpeg",
  },
  {
    text: "Everything You Need to Nurture and Grow Your Farm",
    imageUrl: "/images/service-agro-chemicals.webp",
  },
];

const Slideshow = () => {
  return (
    <Splide
      aria-label="farmers slide"
      options={{
        type: "loop",
        interval: 4000,
        perPage: 1,
        cover: true,
        gap: 30,
        width: "100%",
        autoplay: true,
        arrows: false,
        lazyLoad: true,
        pagination: false,
        easing: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      }}
    >
      {slideImages.map((slide) => (
        <SplideItem
          key={slide.imageUrl}
          text={slide.text}
          imageUrl={slide.imageUrl}
        />
      ))}
    </Splide>
  );
};

export default Slideshow;
