import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import slide_image_2 from "./assets/Images/nuclear.jpg";
import slide_image_3 from "./assets/Images/solar.jpg";
import slide_image_4 from "./assets/Images/wind.jpg";
import slide_image_5 from "./assets/Images/thermo.jpg";
import slide_image_6 from "./assets/Images/hydrolic.jpg";
import "./swiper.css";

function Swipers() {
  const images = [
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
  ];
  const data = [
    {
      title: "Nuclear power plant",
      sub: "nuclear energy released in the chain reaction of nuclear fuel fission",
    },
    {
      title: "Solar-power engineering",
      sub: "sunlight energy (solar irradiance)",
    },

    {
      title: "Wind-power engineering",
      sub: "wind energy (kinetic energy of air)",
    },
    {
      title: "Thermal power plant",
      sub: "chemical energy of fuel (coal, oil, gas)",
    },

    {
      title: "Hydroelectric power station",
      sub: "potential energy of the water",
    },
  ];
  const card = (image, info) => {
    return (
      <SwiperSlide>
        <div className="swiper_div">
          <img src={image} alt="slide_image" />
          <div className="slide_text">
            <h3>{info.title}</h3>
            <p>{info.sub}</p>
          </div>
        </div>
      </SwiperSlide>
    );
  };

  return (
    <div className="container">
      {/* <h1 className="heading">Energy sources</h1> */}
      <div className="mt-12 -mb-8">
        <p className="text-4xl font-serif text-center">Energy Sources</p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1500, // Auto slide delay of 2.5 seconds
          disableOnInteraction: false, // Continue auto sliding after user interaction
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {images.map((image, index) => card(image, data[index]))}

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default Swipers;
