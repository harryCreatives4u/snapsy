import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import LoadingSpinner from "../../UI/LoadingSpinner";
import StoryUser from "./StoryUser";

const StoryHeader = (props) => {
  return (
    <div className="flex items-center justify-center w-full h-24 mb-4 bg-white shadow-md">
      <div className="w-full">
        <Splide
          options={{
            rewind: false,
            gap: "1rem",
            perPage: 5,
            arrows: true,
            pagination: false,
            lazyLoad: true,
          }}
        >
          {props.users.length !== 0 ? (
            props.users.map((user) => (
              <SplideSlide key={user.userId}>
                <StoryUser user={user} />
              </SplideSlide>
            ))
          ) : (
            <div className="flex items-center justify-center h-full">
              <LoadingSpinner />
            </div>
          )}
        </Splide>
      </div>
    </div>
  );
};

export default StoryHeader;
