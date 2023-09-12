"use client";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const slideImages = [
  {
    text: "Your Last Destination for Quality Agricultural Products",
    url: "ok",
  },
  { text: "Get your Products Delivered Right to Your Doorstep", url: "ok" },
  { text: "Always Fresh, Direct from the Farm to Your Home", url: "ok" },
  { text: "Everything You Need to Nurture and Grow Your Farm", url: "ok" },
];

const Slideshow = () => {
  return (
    <Splide
      aria-label="farmers slide"
      options={{
        type: "loop",
        interval: 4000,
        autoplay: true,
        arrows: false,
        lazyLoad: true,
        // pauseOnFocus: true,
        pagination: false,
        easing: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      }}
    >
      <SplideSlide>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae soluta
        voluptate dolor ea consequatur voluptates voluptatem maxime ullam
        dolores, enim deleniti nobis ad iste? Veritatis dolore consequuntur odit
        fugit, cumque eligendi ipsa reiciendis eveniet! Distinctio temporibus
        unde fuga harum! Vero asperiores voluptate adipisci labore deserunt
        optio accusamus dolores voluptatem nemo!
      </SplideSlide>
      <SplideSlide>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        consequuntur repellat dignissimos quisquam eos accusantium officia
        corrupti, accusamus quod cum neque. Rem est omnis ad, praesentium minus
        maiores sit impedit veniam dolorum. Autem nisi, iusto voluptate
        distinctio sapiente sed similique itaque nesciunt sint quibusdam,
        suscipit sit repellat consequuntur aperiam asperiores?
      </SplideSlide>
    </Splide>
  );
};

export default Slideshow;
