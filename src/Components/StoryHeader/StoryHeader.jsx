import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import image from "../../Assets/Img/demo.jpg";

const StoryHeader = () => {
  const slidesNumber = [
    1,
    1,
    1,
    1,
    ,
    1,
    11,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    11,
    1,
  ];
  return (
    <div className="w-full h-20 mb-4 bg-white shadow-md">
      <Splide
        options={{
          rewind: false,
          gap: "1rem",
          perPage: 6,
          arrows: true,
          pagination: false,
          lazyLoad: true,
        }}
      >
        {slidesNumber.map(() => (
          <SplideSlide>
            <a href="#">
              <img
                className="rounded-full w-14 h-14"
                src={image}
                alt="Image 1"
              />
              <p className="text-sm ">username</p>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default StoryHeader;
